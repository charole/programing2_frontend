import axiosOrigin from 'axios';

export const axios = axiosOrigin.create({
  baseURL: 'http://localhost:8000',
});
