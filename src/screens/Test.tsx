import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import RoomCheckToScreenMW from '../components/RoomCheckToScreenMW';
import useMaintenance from '../hooks/useMaintenance';
import InvitationTokenCheckMW from '../components/InvitationTokenCheckMW';
import LoginRegisterMW from '../components/LoginRegisterMW';

function Test(): JSX.Element {
  return (
    <View>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      <RoomCheckToScreenMW />
      <InvitationTokenCheckMW />
      {/* <LoginRegisterMW /> */}
    </View>
  );
}

export default Test;
