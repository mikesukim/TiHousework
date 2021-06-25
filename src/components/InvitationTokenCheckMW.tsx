import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import useMaintenance from '../hooks/useMaintenance';
import SocialLogin from './SocialLogin';
import ApiTestComp from './ApiTestComp';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import LoginRegisterMW from './LoginRegisterMW';

function InvitationTokenCheckMW(): JSX.Element {
  const {onUpdateIsInvited} = useUser();
  const {token, onRemoveToken, onAddToken} = useAuth();
  const {isSocialLoggedIn} = useMaintenance();

  useEffect(() => {
    onRemoveToken();
    // onAddToken('dd');
    isFromLink();
  }, []);

  // 앱이 꺼져있는 상태에서 처음 킬 때
  function isFromLink() {
    onUpdateIsInvited(false);
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log('yayayaya');
        console.log(link);
        if (link.url === 'https://tihouse.page.link/test1') {
          console.log('저 구글 링크로 들어왔어요');
          onUpdateIsInvited(true);
        } else if (link.url === 'https://tihouse.page.link/test') {
          console.log('저 네이버 링크로 들어왔어요');
          onUpdateIsInvited(true);
        }
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
    console.log('토큰있어서 소셜 로그인 안함');
    return <RoomCheckToScreenMW />;
  }
  if (isSocialLoggedIn) {
    console.log('토큰없고 소셜 로그인 됐삼');
    return <LoginRegisterMW />;
  }
  console.log('토큰없고 소셜 로그인 안됐삼');
  return <SocialLogin />;
}

export default InvitationTokenCheckMW;
