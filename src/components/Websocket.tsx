import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function Websocket(): JSX.Element {
  const [state, setState] = useState('not connected yet');
  const [wsState, setWsState] = useState({});
  const [isConnected, setIsConnect] = useState(false);

  function connectWs() {
    const wsURL =
      'wss://r1wh01mjzk.execute-api.ap-northeast-2.amazonaws.com/Prod';
    const ws = new WebSocket(wsURL);
    ws.onopen = () => {
      // connection opened
      setState('connected!');
    };
    ws.onclose = e => {
      // connection disconnected
      setState('disconnected!');
    };
    ws.onmessage = e => {
      console.log(e.data);
    };
    setWsState(ws);
    return ws;
  }
  //   useEffect(() => {}, []);

  function disconnectWs() {
    wsState.close();
  }
  return (
    <View>
      <Text>{state}</Text>
      <Button title="Connect To Websocket!" onPress={connectWs} />
      <Button title="Disconnect To Websocket!" onPress={disconnectWs} />
    </View>
  );
}

export default Websocket;
