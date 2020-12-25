import React, { useCallback, useRef, useState } from 'react';
import booksAPI from './services/books';

const App = () => {
  const inputRef = useRef(null);
  const [books, setBooks] = useState([]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { data } = await booksAPI.get(
        `/volumes?q=${inputRef.current.value}&key=${process.env.REACT_APP_API_KEY}`,
      );

      setBooks(data.items);
    },
    [inputRef],
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Pesquisar</button>
      </form>

      <ul>
        {books.map((book) => (
          <li>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
