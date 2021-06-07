import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TESTTOKEN} from '../credentials';
import useAuth from '../hooks/useAuth.tsx';

function ApiTestComp(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const {token, onRemoveToken, onAddToken} = useAuth();

  const [data, setData] = useState({
    message: '',
  });

  const requestHelloWorld = () => {
    setIsClicked(true);
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
        setData({
          message: response.data.message,
        });
        setIsLoading(false);
        setIsClicked(false);
      })
      .catch(function (error) {
        // handle error
        setData({
          message: error.message,
        });
      });
  };

  const requestLogin = () => {
    setIsClicked(true);
    onRemoveToken();
    axios
      .post(
        'https://rsmz180w6a.execute-api.ap-northeast-2.amazonaws.com/dev/user/login',
        {
          email: 'aaa@aaa.com',
          pass: '1234',
          appkey: 'TiHousework_lala',
        },
      )
      .then(function (response) {
        // handle success
        setData({
          message: response.data.message,
        });
        onAddToken(response.data.token);
        setIsLoading(false);
        setIsClicked(false);
        requestHelloWorld();
      })
      .catch(function (error) {
        // handle error
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
    </View>
  );
}

export default ApiTestComp;
