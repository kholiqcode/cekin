import appConfig from './constant';

export const config = appConfig;

const baseUrl = {
  customer: {
    login: `${config.url.api}/customer/login`,
  },
  auth: {
    refresh: `${config.url.api}/auth/refresh`,
  },
};

export default baseUrl;
