import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import InvitationTokenCheckMW from '../components/InvitationTokenCheckMW';
import LoginRegisterMW from '../components/LoginRegisterMW';

function Test(): JSX.Element {
  return (
    <View>
      <InvitationTokenCheckMW />
      {/* <LoginRegisterMW /> */}
    </View>
  );
}

export default Test;
