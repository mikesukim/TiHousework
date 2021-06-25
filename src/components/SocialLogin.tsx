import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useAuth from '../hooks/useAuth.tsx';

import GoogleLogin from './GoogleLogin.tsx';
import WrapperGoogleLogin from './WrapperGoogleLogin';
import KakaoLogin from './KakaoLogin.tsx';

function SocialLogin(): JSX.Element {
  const {token} = useAuth();
  useEffect(() => {
  }, [token]);

  return (
    <View>
      <WrapperGoogleLogin />
      <KakaoLogin />
    </View>
  );
}

export default SocialLogin;
