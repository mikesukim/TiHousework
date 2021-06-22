import React, {useEffect, useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';
import ApiTestComp from './ApiTestComp';

function ForegroundTest(): JSX.Element {
  const [state, setState] = useState(() => () => console.log('initial state'));
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

  useEffect(() => {
    // const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => state();
  }, [state]);

  function linkDynamicLinks() {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    setState(() => () => unsubscribe());
  }
  return <Button title="Click" onPress={linkDynamicLinks} />;
}

export default ForegroundTest;
