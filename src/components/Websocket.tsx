import React, {useEffect, useState, useRef} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  Container,
  InnerContainer,
  DataView,
  SendBtn,
  TextInputBox,
} from '../styled-components';
import ConfettiCannon from 'react-native-confetti-cannon';
import WebsocketMsgSender from './WebsocketMsgSender';

function Websocket(): JSX.Element {
  const [connectionState, setConnectionState] = useState('not connected yet');
  const [wsState, setWsState] = useState({});
  // const [text, setText] = useState('');
  const [data, setData] = useState('initial data');
  const confetti = useRef(null);

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
      setData(e.data);
      if (e.data.includes('congrat')){
        confetti.current.start();
      }
    };
    setWsState(ws);
    return ws;
  }
  //   useEffect(() => {}, []);

  function disconnectWs() {
    wsState.close();
  }

  console.log('AAAAAA')

  return (
    <Container>
      <InnerContainer>
        <Text style={styles.connectionText}>{connectionState}</Text>
        <Button title="Connect To Websocket!" onPress={connectWs} />
        <Button title="Disconnect To Websocket!" onPress={disconnectWs} />
      </InnerContainer>
      <DataView>
        <Text style={styles.dataText}>{data}</Text>
      </DataView>
      <WebsocketMsgSender ws={wsState} />
      <ConfettiCannon
        count={45}
        origin={{x: 0, y: 0}}
        ref={confetti}
        autoStart={false}
        fadeOut={true}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  connectionText: {
    textAlign: 'center',
  },
  dataText: {
    textAlign: 'center',
  },
});

export default Websocket;
