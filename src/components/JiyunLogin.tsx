import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import WrapperGoogleLogin from './WrapperGoogleLogin';
import KakaoLogin from './KakaoLogin';
import ApiTestComp from './ApiTestComp';
import useUser from '../hooks/useUser';
import JiyunLoginAPI from './JiyunLoginAPI';

function JiyunLogin(): JSX.Element {

  return (
    <View>
      <WrapperGoogleLogin />
      <KakaoLogin />
      <JiyunLoginAPI />
    </View>
  );
}

export default JiyunLogin;
