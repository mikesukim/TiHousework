import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import GoogleLogin from './GoogleLogin';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth.tsx';
import useMaintenance from '../hooks/useMaintenance';

function WrapperGoogleLogin(): JSX.Element {
  const useUserHook = useUser();
  const useMaintenanceHook = useMaintenance();
  return (
    <GoogleLogin userHook={useUserHook} maintenanceHook={useMaintenanceHook} />
  );
}

export default WrapperGoogleLogin;
