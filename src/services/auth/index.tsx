import {API} from '../../configs';
import {setLogged, store} from '../../libs';
import {handleAsync, storeData} from '../../utils';

const {dispatch} = store;

/**
 * a Service for login
 */
export const login = async (payload = {}) => {
  const [res, err] = await handleAsync(API.customer.login({params: payload}));
  if (err) throw err;
  const {data} = res;
  const token = `Bearer ${res.data.token}`;
  storeData('TOKEN', {value: token});
  dispatch(setLogged(true));
  return data;
};
