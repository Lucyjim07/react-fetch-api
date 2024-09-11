import './App.css';
// import Books from './components/Books';
import FetchData from './components/FetchData';

function App() {
  return (
    <>
      {/* <h1>Lista de elementos con funcion map</h1> */}
      {/* <Books /> */}
      <h1>Solicitar data de servidor remoto</h1>
      <FetchData />
      {/* <AsyncFetchData /> */}
    </>
  );
}

export default App;
