import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getHelloWorld, postLogin} from '../router';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import JiyunWelcome from './JiyunWelcome';
import ROUTER from '../navigation/router';
import { SCREENS } from '../constants/screen';
import { Navigation } from 'react-native-navigation';

function JiyunLoginAPI(): JSX.Element {
  const {email} = useUser();
  const {token, onAddToken, onRemoveToken} = useAuth();
  const [message, setMessage] = useState('No message!');
  const [isClicked, SetIsClicked] = useState(false);

  useEffect(() => {
    requestLogin();
  }, [email]);

  const requestLogin = () => {
    onRemoveToken();
    postLogin(email)
      .then(function (response) {
        setMessage(response.data.message);
        onAddToken(response.data.token);
        console.log(email);
        // ROUTER.showPushScreen({
        //   componentId: props.componentId,
        //   screen: SCREENS.Welcome,
        // });
      })
      .catch(function (error) {
        setMessage(error.message);
        // console.log(error.response.status);
        // console.log(error.response.data);
      });
  };

  return (
    <View>
      {/* {message === 'success' ? <JiyunWelcome /> : null} */}
      {/* <Text>{message}</Text> */}
      {/* <Text>{email}</Text>
      <Text>{token}</Text> */}
    </View>
  );
}

export default JiyunLoginAPI;
