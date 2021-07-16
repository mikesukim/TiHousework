import React from 'react';
import {Alert, SafeAreaView} from 'react-native';
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

function WelcomeReceiverScreen(): JSX.Element {
  const {isInvited, inviterEmail, onUpdateIsInvited} = useUser();

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
          <Header2>가족의 초대 링크를 통해서</Header2>
          <Header2>들어와주세요</Header2>
        </View3>
        <View2>
          <Image1 source={require('../img/welcome.jpeg')} />
        </View2>
        <View4>
          <ResetRedux />
        </View4>
      </View1>
    </SafeAreaView>
  );
}

export default WelcomeReceiverScreen;
