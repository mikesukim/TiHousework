import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

function TodoScreenTemp(): JSX.Element {
  const [state, setState] = useState('initial state');

  useEffect(() => {
    setState('hello');
  }, []);

  return (
    <View>
      <Text>TodoList Screen</Text>
    </View>
  );
}

export default TodoScreenTemp;
