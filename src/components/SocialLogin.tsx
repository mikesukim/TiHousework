import React from 'react';
import {View} from 'react-native';

import GoogleLogin from './GoogleLogin.tsx';
import KakaoLogin from './KakaoLogin.tsx';

function SocialLogin(): JSX.Element {
  return (
    <View>
      <GoogleLogin />
      <KakaoLogin />
    </View>
  );
}

export default SocialLogin;
