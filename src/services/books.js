import axios from 'axios';

const booksAPI = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export default booksAPI;
