import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import useMaintenance from '../hooks/useMaintenance';

function Loading(): JSX.Element {
  const {isLoginInProcess} = useMaintenance();
  return (
    <Spinner
      visible={isLoginInProcess}
      textContent="Loading..."
      textStyle={{color: '#FFF'}}
    />
  );
}

export default Loading;
