import React from 'react';
import {useState} from 'react';
import {Image, Platform, TouchableOpacity} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import useView from '../hooks/useView';
import styles from '../styles';

function AddFloatingButton(): JSX.Element {
  const {onUpdateCameraOn} = useView();
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
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
        setIsAddBtnClicked(true);
      }}
      onLongPress={() => {
        ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
        onUpdateCameraOn(true);
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
