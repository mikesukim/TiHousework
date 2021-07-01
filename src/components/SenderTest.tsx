import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firebase from 'react-native-firebase';

async function SenderTest(): Promise<JSX.Element> {
  const SENDER_UID = 'USER1234';
  const link = `https://www.google.com?invitedBy=${SENDER_UID}`;
  const dynamicLinkDomain = 'https://tihouse.page.link';

  // call  DynamicLink constructor
  const DynamicLink = new firebase.links.DynamicLink(link, dynamicLinkDomain);

  const generatedLink = await firebase.links().createDynamicLink(DynamicLink);
  console.log('created link', generatedLink);
  // console.log: https://tihouse.page.link?link=https%3A%2F%2Fwww.google.com%3FinvitedBy%3DUSER1234

  return null;
}

export default SenderTest;
