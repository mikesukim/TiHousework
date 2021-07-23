import React, {useEffect, useState} from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {IntroMiddleView} from '../styled-components/StyledComps';

function TouchableTest(): JSX.Element {
  const [state, setState] = useState('initial state');

  useEffect(() => {
    setState('hello');
  }, []);

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <IntroMiddleView>
        <TouchableOpacity
          onPress={() => {
            console.log('hi');
          }}>
          <Text>Hiiii</Text>
        </TouchableOpacity>
      </IntroMiddleView>
    </SafeAreaView>
  );
}

export default TouchableTest;
