import axios from 'axios';
import qs from 'qs';

const Server = axios.create({
  // baseURL: 'https://api.prom-art.store/',
  baseURL: '/api/',
});

const addAccessTokenToServer = (access: string) => {
  Server.defaults.headers.common.Authorization = `Bearer ${access}`;
};

const makeQuery = (query: object) => qs.stringify(query, {addQueryPrefix: true});

export {
  Server,
  addAccessTokenToServer,
  makeQuery
};
