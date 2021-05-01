import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

function TempHook(): JSX.Element {
  const [state, setState] = useState('initial state');

  useEffect(() => {
    setState('hello');
  }, []);

  return (
    <View>
      <Text>{state}</Text>
    </View>
  );
}

export default TempHook;
