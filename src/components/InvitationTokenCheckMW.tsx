import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';
import ApiTestComp from './ApiTestComp';

function InvitationTokenCheckMW(): JSX.Element {
  const {email, onUpdateEmail, onUpdateIsInvited} = useUser();
  const {token} = useAuth();

  useEffect(() => {
    onUpdateEmail('myapp@gmail.com');
    buildLink(email);
    // test();
    isFromLink();
  }, []);

  async function buildLink(sender) {
    // create a dynamic link (prefix + deep link)
    const link = await dynamicLinks().buildLink({
      // create a deep link
      link: `https://appname.com/?sender=${sender}`,
      // prefix on FB console
      domainUriPrefix: 'https://tihouse.page.link',
    });
    console.log('링크 새로 만들었어요');
    console.log(link);
    return link;
  }

  // function buildShortLink()

  // 앱이 꺼져있는 상태에서 처음 킬 때
  function isFromLink() {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        onUpdateIsInvited(true);
        // Alert.alert('네 저 링크로 들어왔어요');
        // link.url 이 정확히 뭔지 모르겠음
        // console.log(link);
        // console.log(link.url);
        if (
          link.url.includes(
            `https://tihouse.page.link/?link=https://appname.com/?sender`,
          )
          // link.url ===
          // `https://tihouse.page.link/?link=https://appname.com/?sender=${sender}`
        ) {
          // link.url에서 sender value 가져오기
          const query = new URLSearchParams(link.url);
          const sender = query.get('sender');
          console.log(sender);
          Alert.alert('This is a manual home screen');
        }
        // Handle dynamic link inside your own application
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      });
  }

  function test() {
    const query = new URLSearchParams(
      `https://tihouse.page.link/?link=https://appname.com/?sender=123`,
    );
    // const sender = query.get('sender');
    console.log(query);
  }

  function hasToken() {
    if (token) {
      return true;
    }
    return false;
  }

  if (hasToken()) {
    return <ApiTestComp />;
  }
  return <SocialLogin />;
}

export default InvitationTokenCheckMW;
