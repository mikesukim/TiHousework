import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import useUser from '../hooks/useUser.tsx';

function InvitationScreenTemp(): JSX.Element {
  const {
    isInvited,
    inviterEmail,
    onUpdateIsInvited,
    onRemoveIsInvited,
    onUpdateInviterEmail,
    onRemoveInviterEmail,
  } = useUser();

  return (
    <>
      <Text>{inviterEmail}님이 초대하셨네요!!</Text>
    </>
  );
}

export default InvitationScreenTemp;
