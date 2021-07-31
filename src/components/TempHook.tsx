import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from '../styles';

function TempHook(): JSX.Element {
  const [state, setState] = useState('initial state');

  useEffect(() => {
    setState('hello');
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
      <Text>{state}</Text>
    </SafeAreaView>
  );
}

export default TempHook;
