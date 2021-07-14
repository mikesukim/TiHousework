import React from 'react';
import {Button} from 'react-native';
import useAuth from '../hooks/useAuth';
import useMaintenance from '../hooks/useMaintenance';
import useUser from '../hooks/useUser';

function ResetRedux(): JSX.Element {
  const {onRemoveToken} = useAuth();
  const {onRemoveUser} = useUser();
  const {onUpdateIsSocialLoggedIn} = useMaintenance();

  function ResetReduxButton() {
    onRemoveUser();
    onRemoveToken();
    onUpdateIsSocialLoggedIn(false);
  }

  return <Button title="Reset Redux" onPress={ResetReduxButton} />;
}

export default ResetRedux;
