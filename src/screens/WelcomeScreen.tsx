import React from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {StyleSheet, Alert, Button} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import useUser from '../hooks/useUser.tsx';
import {
  Container,
  TopContainer,
  BottomContainer,
  Header1,
  Header2,
  Header3,
  SendBtn,
} from '../styled-components/StyledComps';
import ResetRedux from '../components/ResetRedux';

function WelcomeScreen(): JSX.Element {
  const {email, isInvited, inviterEmail, onUpdateRoomID} = useUser();

  const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      fontSize: 21,
    },
  });

  async function buildLink(param: string, value: string) {
    const link = await dynamicLinks().buildLink({
      link: `https://tihouse.page.link/invitation?${param}=${value}`,
      domainUriPrefix: 'https://tihouse.page.link',
    });
    console.log('링크 새로 만들었어요');
    console.log(link);
    return link;
  }

  function Greeting(props) {
    const isInvited = props.isInvited;
    if (isInvited) {
      return (
        <Container>
          <TopContainer>
            <Header1>Title</Header1>
          </TopContainer>
          <BottomContainer>
            <Header2>안녕하세요 티집살림이에요!</Header2>
            <Header3>{inviterEmail} 님이 초대하셨네요!</Header3>
            <SendBtn
              title="방에 입장"
              onPress={() => Alert.alert(`${inviterEmail} 의 방으로 입장`)}
              bgColor="#e21a5f"
            />
            <ResetRedux />
          </BottomContainer>
        </Container>
      );
    }
    return (
      <Container>
        <TopContainer>
          <Header1>Title</Header1>
        </TopContainer>
        <BottomContainer>
          <Header2>안녕하세요 티집살림이에요!</Header2>
          <Header3>우리의 집안 살림을 같이 티낼 방을 만들어볼래요?</Header3>
          <Button
            title="방만들기"
            onPress={() => {
              onUpdateRoomID('123');
              Alert.alert('새로운 방 번호가 생성되었어요');
            }}
          />
          <Button
            title="초대 링크 복사하기"
            onPress={async () => {
              const link = buildLink('sender', email);
              Clipboard.setString(await link);
              Alert.alert('링크가 복사되었습니다');
            }}
          />
          <ResetRedux />
        </BottomContainer>
      </Container>
    );
  }

  return <Greeting isInvited={isInvited} />;
}

export default WelcomeScreen;
