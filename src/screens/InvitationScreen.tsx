import React from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {SafeAreaView} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
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

function InvitationScreen(): JSX.Element {
  const {email} = useUser();
  const navigation = useNavigation();

  async function buildLink(param: string, value: string) {
    const link = await dynamicLinks().buildLink({
      link: `https://tihouse.page.link/invitation?${param}=${value}`,
      domainUriPrefix: 'https://tihouse.page.link',
    });
    return link;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View1>
        <View3>
          <LogoText>안녕하세요</LogoText>
          <Header2>집안일을 같이 관리할 방을 만들고</Header2>
          <Header2>가족들을 초대해보세요</Header2>
        </View3>
        <View2>
          <Image1 source={require('../img/refer.png')} />
        </View2>
        <View4>
          <CustomButton
            style={{shadowOffset: {width: 3, height: 5}}}
            onPress={async () => {
              const link = buildLink('sender', email);
              Clipboard.setString(await link);
              navigation.navigate('WelcomeSenderScreen');
            }}>
            <CustomButtonText>제가 초대를 할게요</CustomButtonText>
          </CustomButton>
          <CustomButton
            style={{shadowOffset: {width: 3, height: 5}}}
            onPress={() => {
              navigation.navigate('WelcomeReceiverScreen');
            }}>
            <CustomButtonText>저는 초대를 기다릴게요</CustomButtonText>
          </CustomButton>
          <ResetRedux />
        </View4>
      </View1>
    </SafeAreaView>
  );
}

export default InvitationScreen;
