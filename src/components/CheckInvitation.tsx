import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';

function CheckInvitation(): JSX.Element {
  const {isInvited, onUpdateIsInvited} = useUser();
  const handleDynamicLink = link => {
    // onUpdateIsInvited(true);
    // // Handle dynamic link inside your own application
    // if (link.url === 'https://invertase.io/offer') {
    //   // ...navigate to your offers screen
    // }
    if (link.url === 'https://google.com') {
      // return <SocialLogin />;
      Alert.alert(JSON.stringify('This is google page'));
    }
    if (link.url === 'https://naver.com') {
      // return <ApiTestComp />;
      Alert.alert(JSON.stringify('This is naver page!'));
    }
  };

  useEffect(() => {
    // 앱이 꺼져있는 상태에서 처음 킬 때
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        onUpdateIsInvited(true);
        Alert.alert(onUpdateIsInvited);
        Alert.alert('네 저 링크로 들어왔어요');
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      });

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, [onUpdateIsInvited]);

  return null;
}

export default CheckInvitation;
