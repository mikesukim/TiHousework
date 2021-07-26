import React from 'react';
import {Text, View} from 'react-native';

function SelectedView({nameFromParent}): JSX.Element {
  return (
    <>
      {nameFromParent ? (
        <View style={{borderWidth: 1, margin: 20, height: 500}}>
          <Text>{nameFromParent}</Text>
        </View>
      ) : null}
    </>
  );
}

export default SelectedView;
