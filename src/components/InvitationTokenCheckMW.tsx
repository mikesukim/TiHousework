import React, {useEffect, useState} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import useMaintenance from '../hooks/useMaintenance';
import SocialLogin from './SocialLogin';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import LoginRegisterMW from './LoginRegisterMW';

function InvitationTokenCheckMW(): JSX.Element {
  const {onUpdateIsInvited} = useUser();
  const {token, onRemoveToken, onAddToken} = useAuth();
  const {isSocialLoggedIn} = useMaintenance();

  // 앱이 꺼져있는 상태에서 처음 킬 때
  function isFromLink() {
    onUpdateIsInvited(false);
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log(link.url);
        if (link.url === 'https://google.com') {
          console.log('저 구글 링크로 들어왔어요');
          onUpdateIsInvited(true);
        } else if (link.url === 'https://naver.com') {
          console.log('저 네이버 링크로 들어왔어요');
          onUpdateIsInvited(true);
        }
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      })
      .catch(error => {
        onUpdateIsInvited(false);
        console.log('링크로 안 들어왔어요');
      });
  }

  useEffect(() => {
    onRemoveToken();
    setTimeout(() => isFromLink(), 2000);
  }, []);

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
  // console.log('토큰없고 소셜 로그인 안됐삼');
  return <SocialLogin />;
}

export default InvitationTokenCheckMW;
