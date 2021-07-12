import React from 'react';
import {Button} from 'react-native';
import InvitationTokenCheckMW from '../components/InvitationTokenCheckMW';
import useAuth from '../hooks/useAuth';
import useMaintenance from '../hooks/useMaintenance';
import useUser from '../hooks/useUser';

function Test(): JSX.Element {
  const {onRemoveUser} = useUser();
  const {onRemoveToken} = useAuth();
  const {onUpdateIsSocialLoggedIn} = useMaintenance();
  function resetRedux() {
    onRemoveUser();
    onRemoveToken();
    onUpdateIsSocialLoggedIn(false);
  }

  return (
    <>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      <InvitationTokenCheckMW />
      <Button title="Reset Redux" onPress={resetRedux} />
    </>
  );
}

export default Test;
