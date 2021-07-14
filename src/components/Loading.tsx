import React from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';

function Loading(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
      <Text>로딩중입니다</Text>
    </SafeAreaView>
  );
}

export default Loading;
