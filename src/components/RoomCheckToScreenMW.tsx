import React from 'react';
import useUser from '../hooks/useUser.tsx';
import TodoScreenTemp from '../screens/TodoScreenTemp';
import OopsErrorScreen from '../screens/OopsErrorScreen';
import InvitationScreen from '../screens/InvitationScreen';
import WelcomeReceiverScreen from '../screens/WelcomeReceiverScreen';

function RoomCheckToScreenMW(): JSX.Element {
  const {isInvited, roomID} = useUser();

  if (isInvited) {
    if (roomID) {
      return <OopsErrorScreen />;
    }
    return <WelcomeReceiverScreen />;
  }
  if (roomID) {
    return <TodoScreenTemp />;
  }
  return <InvitationScreen />;
}

export default RoomCheckToScreenMW;
