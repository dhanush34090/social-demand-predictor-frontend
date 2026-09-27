import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spirited-motivation-production-3d1a.up.railway.app',
  headers: { 'Content-Type': 'application/json' }
});

export const getProducts = () => api.get('/products');
export const createProduct = data => api.post('/products', data);
export const getSales = () => api.get('/sales');
export const getSocialData = () => api.get('/social-data');
export const getPredictions = () => api.get('/predictions');

export default api;
