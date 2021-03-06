import React, {useEffect} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import LaunchScreen from '../screens/LaunchScreen';

function InvitationTokenCheckMW(): JSX.Element {
  const {token} = useAuth();
  const {onUpdateIsInvited, onUpdateSenderEmail} = useUser();

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
      onUpdateSenderEmail(params.sender);
    }
  };

  if (token) {
    return <RoomCheckToScreenMW />;
  }
  return <LaunchScreen />;
}

export default InvitationTokenCheckMW;
