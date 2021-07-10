import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import dynamicLinks, { firebase } from '@react-native-firebase/dynamic-links';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';
import ApiTestComp from './ApiTestComp';

function InvitationTokenCheckMW(): JSX.Element {
  const {email, onUpdateEmail, onUpdateIsInvited} = useUser();
  const {token} = useAuth();

  useEffect(() => {
    onUpdateEmail('myapp@gmail.com');
    buildLink('sender', email);
    // buildShortLink('sender', email);
    // test();
    // isFromLink();
  }, []);

  async function buildLink(param: string, value: string) {
    const link = await dynamicLinks().buildLink({
      link: `com.kimnoh.busi.tihousework://invitation?${param}=${value}`,
      domainUriPrefix: 'https://tihouse.page.link',
    });
    console.log('링크 새로 만들었어요');
    console.log(link);
    return link;
  }

  // async function buildShortLink(param: string, value: string) {
  //   const link = await firebase.dynamicLinks().buildShortLink({
  //     link: `<your_link>/?${param}=${value}`,
  //     domainUriPrefix: 'https://tihouse.page.link',
  //   });
  //   console.log(link);

  //   return link;
  // }

  // 앱이 꺼져있는 상태에서 처음 킬 때
  function isFromLink() {
    // deep link를 parameter로 받아서 link에 포함되어 있는 sender param 뽑아올 수 없나?
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        onUpdateIsInvited(true);
        Alert.alert('네 저 링크로 들어왔어요');
        if (
          link.url.includes(
            `https://tihouse.page.link/?link=https://myapp.com/?sender`,
          )
        ) {
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
