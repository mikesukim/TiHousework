import React from 'react';
import {View} from 'react-native';
import WrapperGoogleLogin from './WrapperGoogleLogin';
import KakaoLogin from './KakaoLogin.tsx';
import useMaintenance from '../hooks/useMaintenance';

function SocialLogin(): JSX.Element {
  const useMaintenanceHook = useMaintenance();

  return (
    <>
      <WrapperGoogleLogin />
      <KakaoLogin maintenanceHook={useMaintenanceHook} />
    </>
  );
}

export default SocialLogin;
