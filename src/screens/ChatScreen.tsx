import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {developmentMode} from '../../app.json';

export function ChatScreen(props) {
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState(0);
  const {ws} = props;
  
  ws.onmessage = e => {
    setId(preState => preState + 1);
    const incomeData = JSON.parse(e.data);
    const message = [
      {
        _id: id,
        text: incomeData.data,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: incomeData.sender,
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );

    // GiftedChat.append(message);
  };

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);

  const onSend = useCallback((messages = []) => {
    ws.send(JSON.stringify({data: messages[0].text}));
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'michael',
        avatar: 'https://placeimg.com/140/140/any',
      }}
    />
  );
}
