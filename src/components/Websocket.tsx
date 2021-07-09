import React, {useEffect, useState, useRef} from 'react';
import {Button, Text} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {Container, InnerContainer} from '../styled-components';
import WebsocketMsgSender from './WebsocketMsgSender';
import WebsocketMsgReceiver from './WebsocketMsgReceiver';

function Websocket(): JSX.Element {
  const [connectionState, setConnectionState] = useState('not connected yet');
  const [wsState, setWsState] = useState({});
  const websocketMsgReceiver = useRef(null);
  // const confetti = useRef(null);

  function connectWs() {
    const wsURL =
      'wss://r1wh01mjzk.execute-api.ap-northeast-2.amazonaws.com/Prod';
    const ws = new WebSocket(wsURL);
    ws.onopen = () => {
      // connection opened
      setConnectionState('connected!');
    };
    ws.onclose = e => {
      // connection disconnected
      setConnectionState('disconnected!');
    };
    ws.onmessage = e => {
      websocketMsgReceiver.current.callSetText(e.data);
    };
    setWsState(ws);
    return ws;
  }

  function disconnectWs() {
    wsState.close();
  }

  return (
    <Container>
      <InnerContainer>
        <Text style={{textAlign: 'center'}}>{connectionState}</Text>
        <Button title="Connect To Websocket!" onPress={connectWs} />
        <Button title="Disconnect To Websocket!" onPress={disconnectWs} />
      </InnerContainer>
      <WebsocketMsgSender ws={wsState} />
      <WebsocketMsgReceiver ref={websocketMsgReceiver} />
      {/* <DataView>
        <H1>{data}</H1>
      </DataView> */}
      {/* <ConfettiCannon
        count={45}
        origin={{x: 0, y: 0}}
        ref={confetti}
        autoStart={false}
        fadeOut={true}
      /> */}
    </Container>
  );
}

export default Websocket;
