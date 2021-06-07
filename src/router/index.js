import axios from 'axios';

export function getHelloWorld(token) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        'https://rsmz180w6a.execute-api.ap-northeast-2.amazonaws.com/dev/hello',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
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
      .post(
        'https://rsmz180w6a.execute-api.ap-northeast-2.amazonaws.com/dev/user/login',
        {
          email: email,
          pass: '1234',
          appkey: 'TiHousework_lala',
        },
      )
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
