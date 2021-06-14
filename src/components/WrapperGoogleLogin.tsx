import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import GoogleLogin from './GoogleLogin';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth.tsx';

function WrapperGoogleLogin(): JSX.Element {
  const useUserHook = useUser();
  // const useAuthHook = useAuth();
  return <GoogleLogin userHook={useUserHook} />;
}

export default WrapperGoogleLogin;
