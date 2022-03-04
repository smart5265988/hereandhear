import axios from 'axios';
import * as CONST from '../const/index';

export const axiosGet = async (url: string, params = {}) => {
  url = CONST.URL + url;

  let axiosResult;
  try {
    axiosResult = await axios({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
      },
      params: params,
      validateStatus: function (status) {
        return status >= 200 && status < 300 && status !== 202;
      },
    });
  } catch (error) {
    console.error('axios get error');
    axiosResult = [];
  }
  return axiosResult;
};
