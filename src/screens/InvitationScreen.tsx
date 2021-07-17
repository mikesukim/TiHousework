import React from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Alert, Share} from 'react-native';
import {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
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

  const onShare = async (link: string) => {
    try {
      const result = await Share.share({
        message: link,
      });
      if (result.action === Share.sharedAction) {
        console.log('Share was successful');
      } else if (result.action === Share.dismissedAction) {
        Alert.alert('다시 시도해주세요');
      }
    } catch (error) {
      Alert.alert('다시 시도해주세요');
    }
  };

  async function onCreateShareLink() {
    const link = buildLink('sender', email);
    // Clipboard.setString( link);
    // Alert.alert('링크가 복사되었어요');
    onShare(await link);
  }

  if (!isClicked) {
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
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
              onPress={() => {
                onCreateShareLink();
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
