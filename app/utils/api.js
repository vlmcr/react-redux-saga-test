import axios from 'axios';

const api = {
  get: (url) => axios.get(url),
  post: (url) => axios.post(url)
};

export default api;
