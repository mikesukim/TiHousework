import React, {useEffect} from 'react';
import {Text} from 'react-native';
import ResetRedux from '../components/ResetRedux';
import useUser from '../hooks/useUser';
import {BottomContainer, Container} from '../styled-components/StyledComps';

function TodoScreenTemp(): JSX.Element {
  const {onRemoveIsInvited, onRemoveInviterEmail, onUpdateRoomID} = useUser();
  useEffect(() => {
    onRemoveIsInvited();
    onRemoveInviterEmail();
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
