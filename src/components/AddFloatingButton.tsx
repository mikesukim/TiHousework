import React from 'react';
import {Alert, Image, Platform, TouchableOpacity} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

function AddFloatingButton(): JSX.Element {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const hapticTriggerType = Platform.select({
    ios: 'selection',
    android: 'impactMedium',
  });

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
      }}
      onPress={() => {
        Alert.alert('새 집안일을 추가해주세요');
      }}
      onLongPress={() => {
        ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
        Alert.alert('길게 누르셨네요');
      }}
      delayLongPress={200}>
      <Image
        style={{resizeMode: 'contain', width: 30, height: 30}}
        source={require('../img/plus.png')}
      />
    </TouchableOpacity>
  );
}

export default AddFloatingButton;
