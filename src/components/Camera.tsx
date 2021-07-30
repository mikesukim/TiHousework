import React, {useRef, useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import useView from '../hooks/useView';
import styles from '../styles';

function Camera(): JSX.Element {
  const [imgUri, setImgUri] = useState('');
  const {onUpdateCameraOn} = useView();
  const camera = useRef();
  const takePicture = async () => {
    if (camera.current) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      setImgUri(data.uri);
      console.log(data.uri);
    }
  };
  return (
    <>
      <RNCamera style={{flex: 1, alignItems: 'center'}} ref={camera} />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => takePicture()} style={styles.capture}>
          <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onUpdateCameraOn(false)}
          style={styles.capture}>
          <Text style={{fontSize: 14}}> DONE </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Camera;
