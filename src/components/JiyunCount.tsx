import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import useCounter from '../hooks/useCounter';

function JiyunCount(): JSX.Element {
  // const [state, setState] = useState('initial state');

  // useEffect(() => {
  //   setState('hello');
  // }, []);
  const {count, onIncrease, onDecrease, onIncreaseBy} = useCounter();

  return (
    <View>
      <Button title="Increase" onPress={onIncrease} />
      <Button title="Decrease" onPress={onDecrease} />
      <Button title="+5" onPress={() => onIncreaseBy(5)} />
      <Button title="-5" onPress={() => onIncreaseBy(-5)} />
    </View>
  );
}

export default JiyunCount;
