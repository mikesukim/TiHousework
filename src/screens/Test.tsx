import React, {useEffect} from 'react';
import {Header1} from '../styled-components/StyledComps';
import dynamicLinks, {firebase} from '@react-native-firebase/dynamic-links';
import {Button} from 'react-native';
import useUser from '../hooks/useUser.tsx';

function Test({navigation}): JSX.Element {
  const {
    isInvited,
    inviterEmail,
    onUpdateIsInvited,
    onRemoveIsInvited,
    onUpdateInviterEmail,
    onRemoveInviterEmail} = useUser();

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  async function buildLink(param: string, value: string) {
    const link = await dynamicLinks().buildLink({
      link: `https://tihouse.page.link/invitation?${param}=${value}`,
      domainUriPrefix: 'https://tihouse.page.link',
    });
    console.log('링크 새로 만들었어요');
    console.log(link);
    return link;
  }

  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    console.log('네 저 링크로 들어왔어요');
    console.log(link);
    if (link.url.includes('invitation')) {
      const url = link.url;
      const regex = /[?&]([^=#]+)=([^&#]*)/g;
      const params = {};
      let match;
      while ((match = regex.exec(url))) {
        params[match[1]] = match[2];
      }

      onUpdateIsInvited(true);
      onUpdateInviterEmail(params.sender);
      navigation.navigate('Invitation');
    }
  };

  return (
    <>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      {/* <InvitationTokenCheckMW /> */}
      <Header1>welcome</Header1>
      <Button
        title="Create Link"
        onPress={() => buildLink('sender', 'ianjy@gmail.com')}
      />
    </>
  );
}

export default Test;
