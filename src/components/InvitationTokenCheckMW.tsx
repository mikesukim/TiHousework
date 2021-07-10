import React, {useEffect, useState} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import useMaintenance from '../hooks/useMaintenance';
import SocialLogin from './SocialLogin';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import LoginRegisterMW from './LoginRegisterMW';

function InvitationTokenCheckMW(): JSX.Element {
  const {token, onRemoveToken, onAddToken} = useAuth();
  const {isSocialLoggedIn} = useMaintenance();

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
