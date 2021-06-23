import React, {useEffect, useState} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import useUser from '../hooks/useUser.tsx';

function WelcomeScreen(): JSX.Element {
  const {isInvited, inviterEmail} = useUser();

  // isInvited = false
  // inviteEmail = ''
  function Greeting(props) {
    const isInvited = props.isInvited;
    if (isInvited) {
      return (
        <View>
          <Text>안녕하세요 티집살림이에요!</Text>
          <Text>{inviterEmail} 님이 초대하셨네요!</Text>
          <Button
            title="방에 입장"
            onPress={() => Alert.alert(`${inviterEmail} 의 방으로 입장`)}
          />
        </View>
      );
    }

    return (
      <View>
        <Text>안녕하세요 티집살림이에요!</Text>
        <Text>우리의 집안 살림을 같이 티낼 방을 만들어볼래요?</Text>
        <Button title="방만들기" onPress={() => Alert.alert('새방으로 입장')} />
      </View>
    );
  }

  return <Greeting isInvited={isInvited} />;
}

export default WelcomeScreen;
