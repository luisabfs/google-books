import axios from 'axios';

const booksAPI = axios.create({
  baseURL: 'https://www.skoob.com.br/search',
});

export default booksAPI;
