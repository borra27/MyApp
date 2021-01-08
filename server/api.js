import axios from "axios";

export const STATUS = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
}

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const API = {
    post: (url, data) => axios.post(url, data, {headers})
      .then(function (response) {
        const {data, status} = response;

        console.log(data, status);
        return {...data, status}
      })
      .catch(function (errorResponse) {
        const {response: {data, status}} = errorResponse;
        
        console.log(data, status);
        return {...data, status}
      }),
    // TODO: get 추가해야함
}

export default API