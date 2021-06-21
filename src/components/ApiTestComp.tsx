import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TESTTOKEN} from '../credentials';
import useAuth from '../hooks/useAuth.tsx';
import useUser from '../hooks/useUser.tsx';
import {getHelloWorld, postLogin} from '../router';

function ApiTestComp(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  const [loginSucceed, setloginSucceed] = useState(false);
  const {token, onRemoveToken, onAddToken} = useAuth();
  const {email, roomID, isInvited, inviterEmail} = useUser();
  const [data, setData] = useState({
    message: 'not started',
  });

  useEffect(() => {
    // console.log(`EFFECT =  ${token}`);
    if (loginSucceed) {
      requestHelloWorld();
    }
  }, [loginSucceed]);

  const requestLogin = () => {
    setIsClicked(true);
    onRemoveToken();
    postLogin('aaa@aaa.com')
      .then(function (response) {
        setData({
          message: response.data.message,
        });
        onAddToken(response.data.token);
        setloginSucceed(true);
      })
      .catch(function (error) {
        setData({
          message: error.message,
        });
        console.log(error.response.status);
        console.log(error.response.data);
      });
  };

  const requestHelloWorld = () => {
    setIsClicked(true);
    getHelloWorld(token)
      .then(function (response) {
        setData({
          message: response.data.message,
        });
      })
      .catch(function (error) {
        setData({
          message: error.message,
        });
      });
  };

  return (
    <View>
      <Button title="Request HELLO!" onPress={requestLogin} disabled={false} />
      <Text>{data.message}</Text>
      <Text>{token}</Text>
      <Text>{email}</Text>
      <Text>{roomID}</Text>
      <Text>{isInvited}</Text>
      <Text>{inviterEmail}</Text>
    </View>
  );
}

export default ApiTestComp;
