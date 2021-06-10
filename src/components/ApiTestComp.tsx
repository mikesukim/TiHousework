import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TESTTOKEN} from '../credentials';
import useAuth from '../hooks/useAuth.tsx';
import useUser from '../hooks/useUser.tsx';
import {getHelloWorld, postLogin} from '../router';

function ApiTestComp(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const {token, onRemoveToken, onAddToken} = useAuth();
  const {email, onCreate, onRemove} = useUser();
  const [data, setData] = useState({
    message: '',
  });

  const requestLogin = () => {
    setIsClicked(true);
    onRemoveToken();
    postLogin('aaa@aaa.com')
      .then(function (response) {
        setData({
          message: response.data.message,
        });
        onAddToken(response.data.token);
        setIsLoading(false);
        setIsClicked(false);
        requestHelloWorld();
      })
      .catch(function (error) {
        setData({
          message: error.message,
        });
      });
  };

  const requestHelloWorld = () => {
    setIsClicked(true);
    getHelloWorld(token)
      .then(function (response) {
        setData({
          message: response.data.message,
        });
        setIsLoading(false);
        setIsClicked(false);
      })
      .catch(function (error) {
        setData({
          message: error.message,
        });
      });
  };

  return (
    <View>
      <Button
        title="Request API!"
        onPress={requestLogin}
        disabled={!!isClicked}
      />
      <Text>{isLoading ? 'loading' : data.message}</Text>
      <Text>{email}</Text>
    </View>
  );
}

export default ApiTestComp;
