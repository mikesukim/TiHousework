import React, {useEffect} from 'react';
import {View} from 'react-native';
import WrapperGoogleLogin from './WrapperGoogleLogin';
import KakaoLogin from './KakaoLogin.tsx';
import useMaintenance from '../hooks/useMaintenance';
import Loader from './Loader';

function SocialLogin(): JSX.Element {
  const useMaintenanceHook = useMaintenance();

  return (
    <View>
      <WrapperGoogleLogin />
      {/* <KakaoLogin maintenanceHook={useMaintenanceHook} /> */}
      {/* <Loader /> */}
    </View>
  );
}

export default SocialLogin;
