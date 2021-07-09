import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Websocket from '../components/Websocket';
import {Header1} from '../styles/StyledComps'

function Test(): JSX.Element {
  return (
    <View>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      {/* <Websocket /> */}
      <Header1> hello world </Header1>
    </View>
  );
}

export default Test;
