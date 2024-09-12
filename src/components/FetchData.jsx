/* Cargar información desde un recurso externo juega un papel importante en el desarrollo web. Este proceso solicita data desde un servidor y luego usa esa data en la aplicación. */

import { useEffect, useState } from 'react';

const BASE_URL =
  'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /* El API fetch es una herramienta integrada en los navegadores modernos que permite hacer solicitudes HTTP y puede ser usada para solicitar data a servidores remotos */
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        // procesar la data
        // setData(data);
        // console.log(data);
        setData(transformData(data));
      })
      .catch((error) => {
        // manejar el error
        console.error(error);
      });
  }, []);

  const transformData = (data) => {
    const result = data
      .filter((item) => item.status.verified)
      .map((item) => {
        return {
          id: item._id,
          text: item.text,
          type: item.type,
        };
      });

    return result;
  };

  return (
    <div>
      <h2>Cargando informacion del API</h2>
      {data &&
        data.map((item) => (
          <li key={item.id}>
            {item.text} <span>{item.type.toUpperCase()}</span>{' '}
          </li>
        ))}
    </div>
  );
};

export default FetchData;
