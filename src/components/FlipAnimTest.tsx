import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Header3, IntroMiddleView} from '../styled-components/StyledComps';

function FlipAnimTest(): JSX.Element {
  const anim = new Animated.Value(0);
  let degree = 0;
  anim.addListener(({value}) => {
    degree = value;
  });
  const frontInterpolate = anim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = anim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  const frontAnimatedStyle = {
    transform: [{rotateX: frontInterpolate}],
  };
  const backAnimatedStyle = {
    transform: [{rotateX: backInterpolate}],
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    flipCard: {
      justifyContent: 'center',
      backgroundColor: 'yellow',
      width: 300,
      height: 80,
      backfaceVisibility: 'hidden',
    },
    flipCardBack: {
      backgroundColor: 'green',
      position: 'absolute',
    },
    flipText: {
      fontSize: 30,
      alignSelf: 'center',
      top: 0,
    },
  });

  const flipCard = () => {
    if (degree >= 90) {
      Animated.spring(anim, {
        toValue: 0,
        friction: 8,
        tension: 10,
        // By using the native driver, we send everything about the animation to native
        // before starting the animation, allowing native code to perform the animation
        // on the UI thread without having to go through the bridge on every frame.
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(anim, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <IntroMiddleView>
        <View style={styles.container}>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>Hello</Text>
          </Animated.View>
          <Animated.View
            style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
            <Text style={styles.flipText}>Bye</Text>
          </Animated.View>
          <TouchableOpacity onPress={() => flipCard()}>
            <Header3>Flip it</Header3>
          </TouchableOpacity>
        </View>
      </IntroMiddleView>
    </SafeAreaView>
  );
}

export default FlipAnimTest;
