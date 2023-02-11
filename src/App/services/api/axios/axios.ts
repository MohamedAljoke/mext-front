import axios from 'axios';

export const API: string =
  process.env.API_BASE_URL || 'http://54.233.146.252:3333/api/v1';

export const defaultParams = () => {
  return {
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const api = axios.create({
  baseURL: API,
});
