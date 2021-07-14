import React from 'react';
import GoogleLogin from './GoogleLogin';
import useUser from '../hooks/useUser.tsx';
import useMaintenance from '../hooks/useMaintenance';

function WrapperGoogleLogin(): JSX.Element {
  const useUserHook = useUser();
  const useMaintenanceHook = useMaintenance();

  return (
    <GoogleLogin userHook={useUserHook} maintenanceHook={useMaintenanceHook} />
  );
}

export default WrapperGoogleLogin;
