import axios from 'axios';

const api = axios.create({
    base_url: 'https://api.github.com'
});

export default api;
