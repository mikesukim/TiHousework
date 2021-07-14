import React, {useEffect, useState} from 'react';
import {Alert, Dimensions} from 'react-native';
import ResetRedux from '../components/ResetRedux';
import {
  Container,
  TopContainer,
  BottomContainer,
  Header1,
  Header2,
  Header3,
  SendBtn,
} from '../styled-components/StyledComps';

function TempHook(): JSX.Element {
  const [state, setState] = useState('initial state');
  const deviceHeight = Dimensions.get('window').height;

  useEffect(() => {
    setState('hello');
  }, []);

  return (
    <Container>
      <TopContainer>
        <Header1>Title</Header1>
      </TopContainer>
      <BottomContainer>
        <Header2>Oops! 두집살림</Header2>
        <Header3>
          남의 집가서 헛은짓 하지말고 너의 부모님/아이들이 있는 본가로
          돌아가렴...
        </Header3>
        <SendBtn
          title="첫집살림으로"
          onPress={() => Alert.alert('Displaying Checklist')}
          bgColor='#e21a5f'
        />
        <ResetRedux />
      </BottomContainer>
    </Container>
  );
}

export default TempHook;
