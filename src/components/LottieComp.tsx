import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../styles';
import useTodo from '../hooks/useTodo';

function LottieComp({selectedId}): JSX.Element {
  const {todoItem} = useTodo();
  const [isAnimOn, setIsAnimOn] = useState(true);
  const [isPrevDone, setIsPrevDone] = useState(false);
  const animationProgress = new Animated.Value(0);

  console.log('하하');
  Animated.timing(animationProgress, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  if (selectedId !== undefined) {
    if (isPrevDone === false && todoItem[selectedId].done === true && isAnimOn)
      return (
        <>
          {console.log('안녕')}
          <LottieView
            source={require('../lottie/done.json')}
            autoPlay
            progress={animationProgress}
          />
          {/* {setIsPrevDone(true)} */}
        </>
      );
  }
  return <>{console.log('요요')}</>;
}

export default LottieComp;
