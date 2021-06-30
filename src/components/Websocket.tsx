import React, {useEffect, useState, useRef} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {useSpring, animated, config} from '@react-spring/native';
import {
  Container,
  InnerContainer,
  DataView,
  SendBtn,
  TextInputBox,
  H1,
} from '../styled-components';
import WebsocketMsgSender from './WebsocketMsgSender';
import styled from 'styled-components/native';

function Websocket(): JSX.Element {
  const [connectionState, setConnectionState] = useState('not connected yet');
  const [wsState, setWsState] = useState({});
  // const [text, setText] = useState('');
  const [data, setData] = useState('initial data');
  const confetti = useRef(null);

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

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

  return (
    <Container>
      <InnerContainer>
        <H1 as={animated.Text} style={props}>Yolo</H1>
        <animated.Text style={props}>
          hello
        </animated.Text>
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
  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  connectionText: {
    textAlign: 'center',
  },
  dataText: {
    textAlign: 'center',
  },
});

export default Websocket;
