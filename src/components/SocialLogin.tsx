import React, {useEffect} from 'react';
import {View} from 'react-native';
import useAuth from '../hooks/useAuth.tsx';
import WrapperGoogleLogin from './WrapperGoogleLogin';
import KakaoLogin from './KakaoLogin.tsx';
import useMaintenance from '../hooks/useMaintenance';
import Loader from './Loader';

function SocialLogin(): JSX.Element {
  const {token} = useAuth();
  const useMaintenanceHook = useMaintenance();

  useEffect(() => {
  }, [token]);

  return (
    <View>
      <WrapperGoogleLogin />
      <KakaoLogin maintenanceHook={useMaintenanceHook} />
      {/* <Loader /> */}
    </View>
  );
}

export default SocialLogin;
