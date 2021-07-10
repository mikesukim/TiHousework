import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import useUser from '../hooks/useUser';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';
import ApiTestComp from './ApiTestComp';

function InvitationTokenCheckMW(): JSX.Element {
  const {email, onUpdateEmail, onUpdateIsInvited} = useUser();
  const {token} = useAuth();

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
