import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {NavigationComponent} from 'react-native-navigation';
import useUser from '../hooks/useUser.tsx';
import TwoHouseWorkErrorScreen from '../screens/TwoHouseWorkErrorScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreenTemp from '../screens/TodoScreenTemp';

function RoomCheckToScreenMW(): JSX.Element {
  const {isInvited, roomID, onUpdateIsInvited, onUpdateRoomID, onRemoveRoomID} = useUser();

  useEffect(() => {
    onUpdateIsInvited(false);
    // onUpdateRoomID('123');
    onRemoveRoomID();
  }, []);

  function inviteCheck() {
    return isInvited;
  }

  function checkRoom() {
    if (roomID) {
      return true;
    }
    return false;
  }

  if (inviteCheck()) {
    if (checkRoom()) {
      return <TwoHouseWorkErrorScreen />;
    }
    return <WelcomeScreen />;
  }
  if (checkRoom()) {
    return <TodoScreenTemp />;
  }
  return <WelcomeScreen />;
}

export default RoomCheckToScreenMW;
