import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import useUser from '../hooks/useUser';

function TodoScreenTemp(): JSX.Element {
  const {onRemoveIsInvited, onRemoveInviterEmail} = useUser();
  useEffect(() => {
    onRemoveIsInvited();
    onRemoveInviterEmail();
  }, []);

  return (
    <View>
      <Text>TodoList Screen</Text>
    </View>
  );
}

export default TodoScreenTemp;
