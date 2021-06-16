import React from 'react';
import { View } from 'react-native';

import GoogleLogin from './GoogleLogin.tsx';
import KakaoLogin from './KakaoLogin.tsx';

import {WelcomeText, WelcomeWrapper, Wrapper} from '../styles/loginstyle';

function SocialLogin(): JSX.Element {
  return (
    <Wrapper>
      <WelcomeWrapper>
        <WelcomeText>Welcome to TiHouseWork</WelcomeText>
        <GoogleLogin />
        <KakaoLogin />
      </WelcomeWrapper>
    </Wrapper>
  );
}

export default SocialLogin;
