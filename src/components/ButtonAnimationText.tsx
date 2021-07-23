import { transform } from '@babel/core';
import {animated, useSpring} from '@react-spring/native';
import React, {useEffect, useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  CustomButton,
  CustomButtonText,
  Header1,
  Header2,
  IntroMiddleView,
  IntroTopView,
} from '../styled-components/StyledComps';

function ButtonAnimationTest(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  const scaleA = useSpring({
    // transform: isClicked ? [{scale: 0.5}] : [{scale: 1}],
    // scale: isClicked ? 0.5 : 1,
    backgroundColor: isClicked ? 'yellow' : 'pink',
    opacity: isClicked ? 0.5 : 1,
  });
  const style = StyleSheet.create({
    b: {
      borderColor: 'black',
      borderWidth: 2,
      height: 50,
    },
    shadow: {
      shadowOffset: {width: 3, height: 5},
    },
    resize: {
      transform: [{scale: 0.5}],
    },
  });
  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <IntroMiddleView>
        <animated.View style={[scaleA, style.b]} />
        <CustomButton
          style={[style.shadow]}
          onPress={() => setIsClicked(a => !a)}>
          <CustomButtonText>Please</CustomButtonText>
        </CustomButton>
        <animated.View style={[style.b, style.resize]} />
      </IntroMiddleView>
    </SafeAreaView>
  );
}

export default ButtonAnimationTest;
