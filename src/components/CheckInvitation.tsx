import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';
import ApiTestComp from './ApiTestComp';

function CheckInvitation(): JSX.Element {
  const {onUpdateIsInvited} = useUser();
  const {token, onRemoveToken, onAddToken} = useAuth();
  const handleDynamicLink = link => {
    // // Handle dynamic link inside your own application
    // if (link.url === 'https://invertase.io/offer') {
    //   // ...navigate to your offers screen
    // }
    if (link.url === 'https://google.com') {
      Alert.alert(JSON.stringify('This is google page'));
    }
    if (link.url === 'https://naver.com') {
      Alert.alert(JSON.stringify('This is naver page!'));
    }
  };

  function hasToken() {
    if (token) {
      console.log('token 있어여');
      return true;
    }
    console.log('token 없어여');
    return false;
  }

  useEffect(() => {
    onAddToken('hihi');
    // 앱이 꺼져있는 상태에서 처음 킬 때
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        onUpdateIsInvited(true);
        Alert.alert('네 저 링크로 들어왔어요');
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      });

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, [onUpdateIsInvited]);

  if (hasToken()) {
    return <SocialLogin />;
  }
  return <ApiTestComp />;
}

export default CheckInvitation;
