import React from 'react';
import {Button, Text, View} from 'react-native';
import useCounter from '../hooks/useCounter.tsx';
import GoogleLogin from './GoogleLogin.tsx';

function Counter(): JSX.Element {
  const {count, onIncrease, onDecrease, onIncreaseBy} = useCounter();
  return (
    <View>
      <Text>{count}</Text>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
      <Button title="+5" onPress={() => onIncreaseBy(5)} />
      <GoogleLogin />
    </View>
  );
}

export default Counter;
