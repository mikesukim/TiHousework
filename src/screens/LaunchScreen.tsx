import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SocialLogin from '../components/SocialLogin';
import {
  Header2,
  Header3,
  Image1,
  LogoText,
  View1,
  View2,
  View3,
  View4,
} from '../styled-components/StyledComps';

function LaunchScreen(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View1>
        <View3>
          <LogoText>티집살림</LogoText>
          <Header2>티집살림에 오신 것을 환영합니다</Header2>
          <Header3>우리의 집안일을 같이 하러 가볼까요?</Header3>
        </View3>
        <View2>
          <Image1 source={require('../img/1.jpeg')} />
        </View2>
        <View4>
          <SocialLogin />
        </View4>
      </View1>
    </SafeAreaView>
  );
}

export default LaunchScreen;
