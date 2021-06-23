import React, {useEffect, useState} from 'react';
import {Text, View, Button, Alert} from 'react-native';

function TempHook(): JSX.Element {
  const [state, setState] = useState('initial state');

  useEffect(() => {
    setState('hello');
  }, []);

  return (
    <View>
      <Text>Oops! 두집살림</Text>
      <Button
        title="첫집살림으로"
        onPress={() => Alert.alert('Displaying Checklist')}
      />
    </View>
  );
}

export default TempHook;
