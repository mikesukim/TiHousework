import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import SocialLogin from '../components/SocialLogin';
import Websocket from '../components/Websocket';
import WebsocketMsgSender from '../components/WebsocketMsgSender';
import {Container,DataView} from '../styled-components';

function Test(): JSX.Element {
  const websocketMsgSender = useRef(null);
  const websocket = useRef(null);
  return (
    <Container>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      <Websocket />
    </Container>
  );
}

export default Test;
