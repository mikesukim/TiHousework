import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';
import ApiTestComp from './ApiTestComp';

function CheckInvitation(): JSX.Element {
  const {onUpdateIsInvited} = useUser();
  const {token} = useAuth();

  useEffect(() => {
    isFromLink();
  }, []);

  // 앱이 꺼져있는 상태에서 처음 킬 때
  function isFromLink() {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        onUpdateIsInvited(true);
        Alert.alert('네 저 링크로 들어왔어요');
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      });
  }

  function hasToken() {
    if (token) {
      return true;
    }
    return false;
  }

  if (hasToken()) {
    return <ApiTestComp />;
  }
  return <SocialLogin />;
}

export default CheckInvitation;
