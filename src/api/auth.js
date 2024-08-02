import axios from 'axios';

const API_URL = 'https://your-backend-api.com/';

export const register = userData => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = userData => {
  return axios.post(`${API_URL}/login`, userData);
};

export const verify = code => {
  return axios.post(`${API_URL}/verify`, { code });
};
