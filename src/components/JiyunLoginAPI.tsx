import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getHelloWorld, postLogin} from '../router';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';

function JiyunLoginAPI(): JSX.Element {
  const {email} = useUser();
  const {token, onAddToken, onRemoveToken} = useAuth();
  const [message, setMessage] = useState('No message!');

  useEffect(() => {
    requestLogin();
  }, [email]);

  const requestLogin = () => {
    onRemoveToken();
    postLogin(email)
      .then(function (response) {
        if (response.data.message === 'success') {
          // Go to Welcome screen
        }
        // setMessage(response.data.message);
        onAddToken(response.data.token);
        // console.log(email);
      })
      .catch(function (error) {
        setMessage(error.message);
        // console.log(error.response.status);
        // console.log(error.response.data);
      });
  };

  return (
    <View>
      {/* <Text>{message}</Text> */}
      <Text>{email}</Text>
      <Text>{token}</Text>
    </View>
  );
}

export default JiyunLoginAPI;
