import {useLayoutEffect} from 'react';
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {developmentMode} from '../../app.json';

function useWebsocket(roomID: String, userName: String) {
  // const wsURL = developmentMode
  //   ? Platform.OS === 'android'
  //     ? `ws://10.0.2.2:8000/chat/${userName}/${roomID}`
  //     : `ws://localhost:8000/chat/${userName}/${roomID}`
  //   : `TiHo-TiHo-EIPK1WH369V0.eba-zvug7vbt.ap-northeast-2.elasticbeanstalk.com/chat/${userName}/${roomID}`;

  const wsURL = developmentMode
    ? `ws://192.168.1.66:8000/chat/${userName}/${roomID}`
    : `TiHo-TiHo-EIPK1WH369V0.eba-zvug7vbt.ap-northeast-2.elasticbeanstalk.com/chat/${userName}/${roomID}`;

  const [ws, setWs] = useState(new WebSocket(wsURL));
  ws.onopen = () => {
    // connection opened
    console.log('connected to websocket');
  };
  ws.onclose = e => {
    // connection closed
    console.log('disconnected to websocket');
    console.log(e);
  };
  return ws;
}
export default useWebsocket;
