import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {NavigationComponent} from 'react-native-navigation';
import useUser from '../hooks/useUser.tsx';

function RoomCheckToScreenMW(): JSX.Element {
  useEffect(() => {
    inviteAfterCheck();
  }, []);

  // isInvited = false
  // roomID = ''
  const {isInvited, roomID} = useUser();

  function inviteCheck() {
    return isInvited;
  }

  function checkRoom() {
    if (roomID) {
      return true;
    }
    return false;
  }

  function inviteAfterCheck() {
    if (inviteCheck()) {
      if (checkRoom()) {
        Alert.alert('두집살림');
      } else {
        Alert.alert('누가 초대했어?');
      }
    } else if (checkRoom()) {
      Alert.alert('Displaying Checklist');
    } else {
      Alert.alert('누구를 초대할래');
    }
  }

  return null;
}

export default RoomCheckToScreenMW;
