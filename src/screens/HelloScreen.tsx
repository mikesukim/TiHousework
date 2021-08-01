import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Hello from '../components/Hello.tsx';
import styles from '../styles';

function HelloScreen(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default HelloScreen;
