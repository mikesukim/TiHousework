import React from 'react';
import {View} from 'react-native';
import Clock from '../components/Clock.tsx';
import Hello from '../components/Hello.tsx';

function ClockScreen(): JSX.Element {
  return (
    <View>
      <Hello name="Michaaaaaeellll" />
      <Clock />
    </View>
  );
}

ClockScreen.defaultProps = {
  name: 'john',
};

export default ClockScreen;
