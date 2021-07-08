import React, {useEffect} from 'react';
import useUser from '../hooks/useUser.tsx';
import TwoHouseWorkErrorScreen from '../screens/TwoHouseWorkErrorScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreenTemp from '../screens/TodoScreenTemp';

function RoomCheckToScreenMW(): JSX.Element {
  // isInvited = true
  // roomID = ''
  const {isInvited, roomID, onUpdateIsInvited, onUpdateRoomID} = useUser();

  useEffect(() => {
    onUpdateIsInvited(true);
    onUpdateRoomID('123');
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
