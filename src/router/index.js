import axios from 'axios';
const BASEURL = 'https://rsmz180w6a.execute-api.ap-northeast-2.amazonaws.com';
const STAGE = 'dev';

export function getHelloWorld(token) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASEURL}/${STAGE}/hello`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // handle success
        resolve(response);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      });
  });
}

export function postLogin(email) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASEURL}/${STAGE}/user/login`, {
        email: email,
        pass: '1234',
        appkey: 'TiHousework_lala',
      })
      .then(function (response) {
        // handle success
        resolve(response);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      });
  });
}
