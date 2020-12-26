import React, { useCallback, useRef, useState } from 'react';
import booksAPI from './services/books';

const App = () => {
  const inputRef = useRef(null);
  const [books, setBooks] = useState([]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { data } = await booksAPI.get(
        `/v1?q=${inputRef.current.value}&limit=40`,
      );
      setBooks(data.results);
    },
    [inputRef],
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Pesquisar</button>
      </form>

      <div
        style={{
          display: 'flex',
          flex: 1,
          flexWrap: 'wrap',
        }}>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 20,
              width: 200,
            }}>
            <img src={book.img_url} alt="book" style={{ width: 100 }} />
            <span>{book.titulo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
