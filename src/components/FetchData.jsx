/* Cargar información desde un recurso externo juega un papel importante en el desarrollo web. Este proceso solicita data desde un servidor y luego usa esa data en la aplicación. */

import { useEffect } from 'react';

const BASE_URL = '';

const FetchData = () => {
  useEffect(() => {
    /* El API fetch es una herramienta integrada en los navegadores modernos que permite hacer solicitudes HTTP y puede ser usada para solicitar data a servidores remotos */
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        // procesar la data
        console.log(data);
      })
      .catch((error) => {
        // manejar el error
        console.error(error);
      });
  }, []);

  return <div>FetchData</div>;
};

export default FetchData;
