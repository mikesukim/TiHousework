import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Clock from '../components/Clock.tsx';
import Hello from '../components/Hello.tsx';
import styles from '../styles';

function ClockScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
      <Hello name="Michaaaaaeellll" />
      <Clock />
    </SafeAreaView>
  );
}

ClockScreen.defaultProps = {
  name: 'john',
};

export default ClockScreen;
