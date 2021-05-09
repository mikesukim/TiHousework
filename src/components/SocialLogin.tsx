import React from 'react';
import { View } from 'react-native';

import GoogleLogin from './GoogleLogin.tsx';
import KakaoLogin from './KakaoLogin.tsx';

import { ButtonsWrapper, Logo, WelcomeText, WelcomeWrapper, Wrapper } from '../styles/loginstyle';

function SocialLogin(): JSX.Element {
  return (
    <Wrapper>
      <WelcomeWrapper>
        <Logo />
        <WelcomeText>Welcome to TiHouseWork</WelcomeText>
          <ButtonsWrapper>
            <GoogleLogin />
            <KakaoLogin />
          </ButtonsWrapper>
      </WelcomeWrapper>
    </Wrapper>
  );
}

export default SocialLogin;
