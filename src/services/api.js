import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com'
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export default api;
