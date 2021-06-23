import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {postLogin} from '../router';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import Hello from './Hello';

function LoginRegisterMW(): JSX.Element {
  const [isLoginSucceeded, setIsLoginSucceeded] = useState(false);
  const {token, onRemoveToken, onAddToken} = useAuth();

  function requestLoginApi() {
    postLogin('abc@gmail.com')
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
        } else console.log('Error');
      });
  }

  useEffect(() => {
    requestLoginApi();
  }, []);

  if (isLoginSucceeded) {
    return <RoomCheckToScreenMW />;
  }
  return <Hello />;
}

export default LoginRegisterMW;
