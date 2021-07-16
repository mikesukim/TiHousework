import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import useAuth from '../hooks/useAuth';
import useMaintenance from '../hooks/useMaintenance';
import useUser from '../hooks/useUser';

function ResetRedux(): JSX.Element {
  const {onRemoveToken} = useAuth();
  const {onRemoveUser} = useUser();
  const {onUpdateIsSocialLoggedIn} = useMaintenance();
  const navigation = useNavigation();

  function ResetReduxButton() {
    onRemoveUser();
    onRemoveToken();
    onUpdateIsSocialLoggedIn(false);
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return <Button title="Reset Redux" onPress={ResetReduxButton} />;
}

export default ResetRedux;
