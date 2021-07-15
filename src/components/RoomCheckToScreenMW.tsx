import React from 'react';
import useUser from '../hooks/useUser.tsx';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreenTemp from '../screens/TodoScreenTemp';
import OopsErrorScreen from '../screens/OopsErrorScreen';

function RoomCheckToScreenMW(): JSX.Element {
  const {isInvited, roomID} = useUser();

  function inviteCheck() {
    return isInvited;
  }

  // please change the function names so it can make sense as reading in a sentence.
  // such as, checkRoom to roomExist. Then using this function in if statement, it will more make sense gramatically(readability).
  function checkRoom() {
    if (roomID) {
      return true;
    }
    return false;
  }

  if (inviteCheck()) {
    if (checkRoom()) {
      return <OopsErrorScreen />;
    }
    return <WelcomeScreen />;
  }
  if (checkRoom()) {
    return <TodoScreenTemp />;
  }
  return <WelcomeScreen />;
}

export default RoomCheckToScreenMW;
