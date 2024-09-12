import { useEffect, useState } from 'react';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

async function fetchDataAsync() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}

const AsyncFetchData = () => {
  const [data, setData] = useState([]);
  const [errorState, setErrorState] = useState({ hasError: false });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleIsLoading();

    fetchDataAsync()
      .then(handleData)
      .catch(handleError)
      .finally(handleIsLoading);
  }, []);

  const handleIsLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const handleData = (cocktail) => {
    const result = cocktail.drinks.map((cocktel) => {
      return {
        id: cocktel.idDrink,
        name: cocktel.strDrink,
        category: cocktel.strCategory,
        alcoholic: cocktel.strAlcoholic,
        glass: cocktel.strGlass,
        instructions: cocktel.strInstructionsES,
        thumb: cocktel.strDrinkThumb,
      };
    });

    setData(result);
  };

  const handleError = (error) => {
    setErrorState({ hasError: true, error: error });
  };

  return (
    <>
      {errorState.hasError && <div>{errorState.error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div>
          {data.map((cocktail) => (
            <div key={cocktail.id}>
              <h3>{cocktail.name}</h3>
              <p>{cocktail.instructions}</p>
              <p>Categoría: {cocktail.category}</p>
              <p>Vaso: {cocktail.glass}</p>
              <img
                src={cocktail.thumb}
                alt={`imagen del cocktail ${cocktail.name}`}
                height={350}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AsyncFetchData;
