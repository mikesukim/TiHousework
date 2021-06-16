import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {WelcomeText, WelcomeWrapper, Wrapper} from '../styles/loginstyle';
import WrapperGoogleLogin from './WrapperGoogleLogin';
import KakaoLogin from './KakaoLogin';
import ApiTestComp from './ApiTestComp';
import useUser from '../hooks/useUser';
import JiyunLoginAPI from './JiyunLoginAPI';

function JiyunLogin(): JSX.Element {

  return (
    // <Wrapper>
    //   <WelcomeWrapper>
    //     <WrapperGoogleLogin />
    //     <KakaoLogin />
    //     <JiyunLoginAPI />
    //   </WelcomeWrapper>
    // </Wrapper>
    <View>
      <WrapperGoogleLogin />
      <KakaoLogin />
      <JiyunLoginAPI />
    </View>
  );
}

export default JiyunLogin;
