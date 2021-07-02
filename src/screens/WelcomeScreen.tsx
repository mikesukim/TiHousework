import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import useUser from '../hooks/useUser.tsx';
import {
  GreetingCtr,
  GreetingTopCtr,
  GreetingBottomCtr,
  GreetingH1,
  GreetingH2,
  GreetingH3,
  GreetingSendBtn,
} from './StyledComps';

function WelcomeScreen(): JSX.Element {
  const {isInvited, inviterEmail} = useUser();

  const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      fontSize: 21,
    },
  });

  // isInvited = true
  // inviteEmail = ''
  function Greeting(props) {
    const isInvited = props.isInvited;
    console.log('Checking isInvited from Welcome = ' + isInvited);
    if (isInvited) {
      return (
        <GreetingCtr>
          <GreetingTopCtr>
            <GreetingH1>Title</GreetingH1>
          </GreetingTopCtr>
          <GreetingBottomCtr>
            <GreetingH2>안녕하세요 티집살림이에요!</GreetingH2>
            <GreetingH3>{inviterEmail} 님이 초대하셨네요!</GreetingH3>
            <GreetingSendBtn
              title="방에 입장"
              onPress={() => Alert.alert(`${inviterEmail} 의 방으로 입장`)}
              bgColor="#e21a5f"
            />
          </GreetingBottomCtr>
        </GreetingCtr>
      );
    }
    return (
      <GreetingCtr>
        <GreetingTopCtr>
          <GreetingH1>Title</GreetingH1>
        </GreetingTopCtr>
        <GreetingBottomCtr>
          <GreetingH2>안녕하세요 티집살림이에요!</GreetingH2>
          <GreetingH3>
            우리의 집안 살림을 같이 티낼 방을 만들어볼래요?
          </GreetingH3>
          <GreetingSendBtn
            title="방만들기"
            onPress={() => Alert.alert('새방으로 입장')}
            bgColor="#e21a5f"
          />
        </GreetingBottomCtr>
      </GreetingCtr>
    );
  }

  return <Greeting isInvited={isInvited} />;
}

export default WelcomeScreen;
