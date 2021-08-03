import React, {useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageResizer from 'react-native-image-resizer';
import useTodo from '../hooks/useTodo';
import useView from '../hooks/useView';
import styles from '../styles';

function Camera({selectedId}): JSX.Element {
  const [imgUri, setImgUri] = useState('');
  const [flashOn, setFlashOn] = useState(false);
  const {isBefore, onUpdateCameraOn} = useView();
  const {
    todoItem,
    onAddTodoItem,
    onToggleTodoDone,
    onUpdateAfterImgUri,
  } = useTodo();
  const camera = useRef();

  const takePicture = async () => {
    if (camera.current) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      setImgUri(data.uri);
    }
  };
  const addNewItem = imgUri => {
    let id = 0;
    const title = <Icon name="image-outline" size={25} />;
    if (todoItem.length !== 0) {
      id = Math.max(...todoItem.map(item => item.id)) + 1;
    }
    onAddTodoItem([
      {
        id,
        title,
        name: '지윤',
        done: false,
        beforeImgUri: imgUri,
        afterImgUri: '',
      },
    ]);
  };
  const addAfterImg = imgUri => {
    onUpdateAfterImgUri(selectedId, imgUri);
    onToggleTodoDone(selectedId);
  };
  const imgResize = () => {
    ImageResizer.createResizedImage(
      imgUri, // path
      1000, // width
      1000, // height
      'JPEG', // format
      100, // quality
      0, // rotation
      undefined, // outputPath
    )
      .then(response => {
        console.log(response.size);
        isBefore ? addNewItem(response.uri) : addAfterImg(response.uri);
      })
      .catch(err => {
        console.log(err);
        return Alert.alert('Unable to resize the photo');
      });
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
          flashMode={
            flashOn
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
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
              onPress={() => {
                onUpdateCameraOn(false);
                imgResize();
              }}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> DONE </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => setFlashOn(prevState => !prevState)}
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: 20,
                borderRadius: 20,
                alignSelf: 'center',
              }}>
              <Icon name="flashlight-outline" size={33} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => takePicture()}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onUpdateCameraOn(false)}
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: 20,
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
