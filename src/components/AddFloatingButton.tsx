import React from 'react';
import {Alert, Image, Platform, TouchableOpacity} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import styles from '../styles';

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
      style={styles.floatingBtn}
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
