import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import InvitationTokenCheckMW from '../components/InvitationTokenCheckMW';
import TodoHomeScreen from './TodoHomeScreen';

function Test(): JSX.Element {
  return (
    <>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      {/* <InvitationTokenCheckMW /> */}
      <TodoHomeScreen />
    </>
  );
}

export default Test;
