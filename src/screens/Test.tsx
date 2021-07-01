import React from 'react';
import {Text, View} from 'react-native';
import InvitationTokenCheckMW from '../components/InvitationTokenCheckMW';
import SenderTest from '../components/SenderTest';

function Test(): JSX.Element {
  return (
    <View>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      <InvitationTokenCheckMW />
      {/* <SenderTest /> */}
    </View>
  );
}

export default Test;
