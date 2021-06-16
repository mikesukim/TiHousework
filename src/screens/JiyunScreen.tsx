import React from 'react';
import {View} from 'react-native';
import JiyunHello from '../components/JiyunHello';
import JiyunCount from '../components/JiyunCount';

function JiyunScreen(): JSX.Element {
  return (
    <View>
      <JiyunHello />
      <JiyunCount />
    </View>
  );
}

export default JiyunScreen;
