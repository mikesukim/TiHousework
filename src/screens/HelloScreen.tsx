import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Hello from '../components/Hello.tsx';
import styles from '../styles';

function HelloScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello />
    </SafeAreaView>
  );
}

export default HelloScreen;
