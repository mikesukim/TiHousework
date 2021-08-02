import React, {useEffect} from 'react';
import {Text} from 'react-native';
import ResetRedux from '../components/ResetRedux';
import useUser from '../hooks/useUser';
import {BottomContainer, Container} from '../styled-components/StyledComps';

import {ChatScreen} from './ChatScreen';
import Websocket from './../components/Websocket.tsx';
import useWebsocket from '../hooks/useWebsocket.tsx';

function TodoScreenTemp(): JSX.Element {
  const {email, roomID, onRemoveIsInvited, onRemoveSenderEmail} = useUser();
  useEffect(() => {
    // onRemoveIsInvited();
    // onRemoveSenderEmail();
    return () => {
      ws.close();
    };
  }, []);

  const ws = useWebsocket(roomID,email);
  return (
    // <Container>
    //   <BottomContainer>
    //     <Text>TodoList Screen</Text>
    //     <ResetRedux />
    //   </BottomContainer>
    // </Container>
  <>
    <ChatScreen ws={ws} />
    <ResetRedux />
  </>
  );
}

export default TodoScreenTemp;
