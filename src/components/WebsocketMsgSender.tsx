import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SendBtn, TextInputBox } from '../styled-components';

function WebsocketMsgSender(props): JSX.Element {
  const [text, setText] = useState('');

  function sendMessageWs() {
    props.ws.send(
      JSON.stringify({
        action: 'sendmessage',
        data: text,
      }),
    );
    setText('');
  }
  return (
    <>
      <TextInputBox onChangeText={setText} value={text} />
      <SendBtn onPress={sendMessageWs}>
        <Text style={styles.sendText}>Send</Text>
      </SendBtn>
    </>
  );
}
const styles = StyleSheet.create({
  sendText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default WebsocketMsgSender;
