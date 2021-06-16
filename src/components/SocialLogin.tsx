import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useAuth from '../hooks/useAuth.tsx';

import GoogleLogin from './GoogleLogin.tsx';
import WrapperGoogleLogin from './WrapperGoogleLogin';
import KakaoLogin from './KakaoLogin.tsx';

import {WelcomeText, WelcomeWrapper, Wrapper} from '../styles/loginstyle';

function SocialLogin(): JSX.Element {
  // const {token} = useAuth();

  return (
    <Wrapper>
      <WelcomeWrapper>
        <WelcomeText>Welcome to TiHouseWork</WelcomeText>
        <WrapperGoogleLogin />
        <KakaoLogin />
      </WelcomeWrapper>
    </Wrapper>
  );
}

export default SocialLogin;
