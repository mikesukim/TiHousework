import React, {useEffect} from 'react';
import useUser from '../hooks/useUser.tsx';
import TwoHouseWorkErrorScreen from '../screens/TwoHouseWorkErrorScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreenTemp from '../screens/TodoScreenTemp';

function RoomCheckToScreenMW(): JSX.Element {
  const {isInvited, roomID} = useUser();

  function inviteCheck() {
    return isInvited;
  }

  // please change the function names so it can make sense in a sentence syntax.
  // such as, checkRoom to roomExist. Then using this function in if statement, it will more make sense gramatically(readability).
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
