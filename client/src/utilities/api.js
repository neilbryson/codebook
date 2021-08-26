import axios from 'axios';

const host = import.meta.env.VITE_SERVER_HOST;
const port = import.meta.env.VITE_SERVER_PORT;
const protocol = import.meta.env.VITE_SERVER_PROTOCOL;

const BASE_URL = `${protocol}://${host}:${port}`;
const TIMEOUT = 25000;

const defaultOpts = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: TIMEOUT,
};

export function api(options = {}) {
  const opts = {
    ...defaultOpts,
    ...options,
    headers: { ...defaultOpts.headers, ...options.headers },
  };
  return axios.request(opts);
}
