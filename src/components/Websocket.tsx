import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

function Websocket(): JSX.Element {
  const [connectionState, setConnectionState] = useState('not connected yet');
  const [wsState, setWsState] = useState({});
  const [text, setText] = useState('');
  const [data, setData] = useState('initial data');

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
    };
    setWsState(ws);
    return ws;
  }
  //   useEffect(() => {}, []);

  function disconnectWs() {
    wsState.close();
  }

  function sendMessageWs() {
    wsState.send(
      JSON.stringify({
        action: 'sendmessage',
        data: text,
      }),
    );
    setText('');
  }

  return (
    <View>
      <Text style={styles.connectionText}>{connectionState}</Text>
      <Button title="Connect To Websocket!" onPress={connectWs} />
      <Button title="Disconnect To Websocket!" onPress={disconnectWs} />
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <TouchableHighlight style={styles.sendButton} onPress={sendMessageWs}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  sendButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  sendText: {
    color: '#fff',
    textAlign: 'center',
  },
  connectionText: {
    textAlign: 'center',
  },
});

export default Websocket;
