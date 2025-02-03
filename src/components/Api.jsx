import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nest-crypto.vercel.app',
});

export default api;
