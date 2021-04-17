import constant from './constant';
import {default as ApiRequest, default as request} from './request';
import {default as baseUrl, default as url} from './url';
const API: any = {};
// Customer
API.customer = {
  login: ApiRequest.post(baseUrl.customer.login),
};

export {API, constant, request, url};
