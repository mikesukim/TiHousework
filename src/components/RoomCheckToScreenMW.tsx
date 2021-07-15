import React from 'react';
import useUser from '../hooks/useUser.tsx';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreenTemp from '../screens/TodoScreenTemp';
import OopsErrorScreen from '../screens/OopsErrorScreen';
import InvitationScreen from '../screens/InvitationScreen';

function RoomCheckToScreenMW(): JSX.Element {
  const {isInvited, roomID} = useUser();

  if (isInvited) {
    if (roomID) {
      return <OopsErrorScreen />;
    }
    // 아이콘있는 웰컴 스크린으로 가야함
    return <WelcomeScreen />;
  }
  if (roomID) {
    return <TodoScreenTemp />;
  }
  return <InvitationScreen />;
}

export default RoomCheckToScreenMW;
