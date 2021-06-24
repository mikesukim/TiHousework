import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {postLogin, postRegister} from '../router';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import Hello from './Hello';
import SocialLogin from './SocialLogin';

function LoginRegisterMW(): JSX.Element {
  const [isLoginSucceeded, setIsLoginSucceeded] = useState(false);
  const {token, onAddToken} = useAuth();

  function requestLoginApi() {
    const email = '1jungi@gmail.com';
    postLogin(email)
      .then(function (response) {
        onAddToken(response.data.token);
        setIsLoginSucceeded(true);
      })
      .catch(function (error) {
        if (
          error.response.status == 400 &&
          error.response.data == 'no id exist'
        ) {
          console.log('No id exist');
          postRegister(email)
            .then(function () {
              postLogin(email)
                .then(function (r) {
                  onAddToken(r.data.token);
                  setIsLoginSucceeded(true);
                })
                .catch(function (e) {
                  console.log('It should not happen..');
                });
            })
            .catch(function (er) {
              console.log(er.response.data);
            });
        } else console.log('Error');
      });
  }

  useEffect(() => {
    requestLoginApi();
  }, []);

  if (isLoginSucceeded) {
    return <RoomCheckToScreenMW />;
  }
  return <SocialLogin />;
}

export default LoginRegisterMW;
