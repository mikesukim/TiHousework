import React, {useEffect, useState} from 'react';
import GoogleLogin from './GoogleLogin';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth.tsx';

function WrapperGoogleLogin(): JSX.Element {
  const useUserHook = useUser();
  return <GoogleLogin userHook={useUserHook} />;
}

export default WrapperGoogleLogin;
