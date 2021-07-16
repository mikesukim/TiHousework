import React from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {SafeAreaView} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {useState} from 'react';
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
import WelcomeSenderScreen from './WelcomeSenderScreen';
import WelcomeReceiverScreen from './WelcomeReceiverScreen';

function InvitationScreen(): JSX.Element {
  const {email, isSender, onUpdateIsSender} = useUser();
  const [isClicked, setIsClicked] = useState(false);

  async function buildLink(param: string, value: string) {
    const link = await dynamicLinks().buildLink({
      link: `https://tihouse.page.link/invitation?${param}=${value}`,
      domainUriPrefix: 'https://tihouse.page.link',
    });
    return link;
  }

  if (!isClicked) {
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
                setIsClicked(true);
                onUpdateIsSender(true);
              }}>
              <CustomButtonText>제가 초대를 할게요</CustomButtonText>
            </CustomButton>
            <CustomButton
              style={{shadowOffset: {width: 3, height: 5}}}
              onPress={() => {
                setIsClicked(true);
                onUpdateIsSender(false);
              }}>
              <CustomButtonText>저는 초대를 기다릴게요</CustomButtonText>
            </CustomButton>
            <ResetRedux />
          </View4>
        </View1>
      </SafeAreaView>
    );
  }
  if (isSender) {
    return <WelcomeSenderScreen />;
  }
  return <WelcomeReceiverScreen />;
}

export default InvitationScreen;
