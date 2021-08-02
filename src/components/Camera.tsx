import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
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
      {imgUri ? (
        <Image source={{uri: imgUri}} style={{flex: 1}} />
      ) : (
        <RNCamera
          style={{flex: 1, alignItems: 'center'}}
          ref={camera}
          captureAudio={false}
        />
      )}
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        {imgUri ? (
          <>
            <TouchableOpacity
              onPress={() => setImgUri('')}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> RETRY </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onUpdateCameraOn(false)}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> DONE </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => takePicture()}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onUpdateCameraOn(false)}
              style={{
                position: 'absolute',
                right: 30,
                backgroundColor: '#fff',
                borderRadius: 20,
                alignSelf: 'center',
              }}>
              <Icon name="close-outline" size={33} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
}

export default Camera;
