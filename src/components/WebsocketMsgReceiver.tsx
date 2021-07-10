import React, {useEffect, useImperativeHandle, useState} from 'react';
import {useSpring, animated, config} from '@react-spring/native';
import {DataView, H1} from '../styled-components';

function WebsocketMsgReceiver(props, ref): JSX.Element {
  const [text, setText] = useState('no data yet');

  useImperativeHandle(ref, () => ({
    callSetText(text){
      setText(text);
    }
  }));

  console.log('rerendered');
  return (
    <DataView>
      <H1>{text}</H1>
    </DataView>
  );
}

export default React.forwardRef(WebsocketMsgReceiver);
