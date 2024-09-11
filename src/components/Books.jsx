import Each from './Each';

const books = [
  { id: 1, title: 'Title', author: 'Author', read: true },
  { id: 2, title: 'Title', author: 'Author', read: false },
  { id: 3, title: 'Title', author: 'Author', read: true },
  { id: 4, title: 'Title', author: 'Author', read: false },
  { id: 5, title: 'Title', author: 'Author', read: true },
];

const Books = () => {
  return (
    <>
      <div>
        <h2>Lista de libros</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> de {book.author}
              <i>{book.read ? ' Leido' : ' No leido'}</i>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Lista de libros</h2>
        <ul>
          <Each
            of={books}
            render={(book, index) => (
              <li>
                {index}. <strong>{book.title}</strong> de {book.author}
                <i>{book.read ? ' Leido' : ' No leido'}</i>
              </li>
            )}
          />
        </ul>
      </div>
    </>
  );
};

export default Books;
