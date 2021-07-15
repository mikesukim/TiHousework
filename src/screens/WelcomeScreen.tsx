import React from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Alert, SafeAreaView} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import useUser from '../hooks/useUser.tsx';
import {
  Header2,
  Image1,
  LogoText,
  View1,
  View2,
  View3,
  View4,
  CustomButton,
  CustomButtonText,
} from '../styled-components/StyledComps';
import ResetRedux from '../components/ResetRedux';

function WelcomeScreen(): JSX.Element {
  const {
    email,
    isInvited,
    inviterEmail,
    onUpdateRoomID,
    onUpdateIsInvited,
  } = useUser();

  async function buildLink(param: string, value: string) {
    const link = await dynamicLinks().buildLink({
      link: `https://tihouse.page.link/invitation?${param}=${value}`,
      domainUriPrefix: 'https://tihouse.page.link',
    });
    return link;
  }

  if (isInvited) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View1>
          <View3>
            <LogoText>환영합니다</LogoText>
            <Header2>{inviterEmail} 님이</Header2>
            <Header2>초대하셨네요</Header2>
          </View3>
          <View2>
            <Image1 source={require('../img/welcome.jpeg')} />
          </View2>
          <View4>
            <CustomButton
              style={{shadowOffset: {width: 3, height: 5}}}
              onPress={() => {
                Alert.alert(`${inviterEmail} 의 방으로 입장`);
              }}>
              <CustomButtonText>가족의 방으로 들어갈래요</CustomButtonText>
            </CustomButton>
            <CustomButton
              style={{shadowOffset: {width: 3, height: 5}}}
              onPress={() => {
                onUpdateIsInvited(false);
              }}>
              <CustomButtonText>아니요, 새로운 방을 만들래요</CustomButtonText>
            </CustomButton>
            <ResetRedux />
          </View4>
        </View1>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View1>
        <View3>
          <LogoText>환영합니다</LogoText>
          <Header2>집안일을 같이 관리할 방을 만들고</Header2>
          <Header2>가족들을 초대해보세요</Header2>
        </View3>
        <View2>
          <Image1 source={require('../img/refer.png')} />
        </View2>
        <View4>
          <CustomButton
            style={{shadowOffset: {width: 3, height: 5}}}
            onPress={() => {
              // room ID는 어떻게 만들어줄건지?
              onUpdateRoomID('1');
              Alert.alert('새로운 방이 만들어졌어요');
            }}>
            <CustomButtonText>우리 가족의 방을 만들래요</CustomButtonText>
          </CustomButton>
          <CustomButton
            style={{shadowOffset: {width: 3, height: 5}}}
            onPress={async () => {
              const link = buildLink('sender', email);
              Clipboard.setString(await link);
              Alert.alert('링크가 복사되었어요. 가족들에게 공유해보세요');
            }}>
            <CustomButtonText>우리 가족을 초대할래요</CustomButtonText>
          </CustomButton>
          <ResetRedux />
        </View4>
      </View1>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
