import { useEffect, useState } from 'react';

const BASE_URL = '';

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
    fetchDataAsync().then(handleData).catch(handleError);
  }, []);

  const handleIsLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const handleData = (data) => {
    setData(data);
  };

  const handleError = (error) => {
    setErrorState({ hasError: true, error: error });
  };

  return (
    <>
      {errorState.hasError && <div>{errorState.error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <div>data</div>}
    </>
  );
};

export default AsyncFetchData;
