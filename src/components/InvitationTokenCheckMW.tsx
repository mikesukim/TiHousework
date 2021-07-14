import React, {useEffect} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';
import useMaintenance from '../hooks/useMaintenance';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import LoginRegisterMW from './LoginRegisterMW';
import LaunchScreen from '../screens/LaunchScreen';

function InvitationTokenCheckMW(): JSX.Element {
  const {token} = useAuth();
  const {onUpdateIsInvited, onUpdateInviterEmail} = useUser();
  const {isSocialLoggedIn} = useMaintenance();

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => {
      unsubscribe();
    };
  }, []);

  const handleDynamicLink = link => {
    if (link.url.includes('invitation')) {
      const url = link.url;
      const regex = /[?&]([^=#]+)=([^&#]*)/g;
      const params = {};
      let match;
      while ((match = regex.exec(url))) {
        params[match[1]] = match[2];
      }
      onUpdateIsInvited(true);
      onUpdateInviterEmail(params.sender);
    }
  };

  function hasToken() {
    if (token) {
      return true;
    }
    return false;
  }

  if (hasToken()) {
    return <RoomCheckToScreenMW />;
  }
  if (isSocialLoggedIn) {
    return <LoginRegisterMW />;
  }
  return <LaunchScreen />;
}

export default InvitationTokenCheckMW;
