import React, {useEffect} from 'react';
import {Text} from 'react-native';
import ResetRedux from '../components/ResetRedux';
import useUser from '../hooks/useUser';
import {BottomContainer, Container} from '../styles/StyledComps';

function TodoScreenTemp(): JSX.Element {
  const {onRemoveIsInvited, onRemoveSenderEmail, onUpdateRoomID} = useUser();
  useEffect(() => {
    onRemoveIsInvited();
    onRemoveSenderEmail();
    onUpdateRoomID('1');
  }, []);

  return (
    <Container>
      <BottomContainer>
        <Text>TodoList Screen</Text>
        <ResetRedux />
      </BottomContainer>
    </Container>
  );
}

export default TodoScreenTemp;
