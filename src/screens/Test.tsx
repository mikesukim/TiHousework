import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import RoomCheckToScreenMW from '../components/RoomCheckToScreenMW';
import useMaintenance from '../hooks/useMaintenance';
import InvitationTokenCheckMW from '../components/InvitationTokenCheckMW';
import LoginRegisterMW from '../components/LoginRegisterMW';
import SocialLogin from '../components/SocialLogin';
import useUser from '../hooks/useUser';

function Test(): JSX.Element {
  const {email} = useUser();
  return (
    <View>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      <InvitationTokenCheckMW />
      {/* <SocialLogin /> */}
      {/* <Text>{email}</Text> */}
      {/* <LoginRegisterMW /> */}
    </View>
  );
}

export default Test;
