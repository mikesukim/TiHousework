import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import useCounter from '../hooks/useCounter';

function JiyunHello(): JSX.Element {
  // const [state, setState] = useState('initial state');

  // useEffect(() => {
  //   setState('hello');
  // }, []);
  const {count} = useCounter();

  return (
    <View>
      <Text>Hello This is Jiyun</Text>
      <Text>{count}</Text>
    </View>
  );
}

export default JiyunHello;
