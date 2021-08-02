import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import useTodo from '../hooks/useTodo';
import useView from '../hooks/useView';
import styles from '../styles';

function Camera({selectedId}): JSX.Element {
  const [imgUri, setImgUri] = useState('');
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
    if (todoItem.length !== 0) {
      id = Math.max(...todoItem.map(item => item.id)) + 1;
    }
    const title = <Icon name="image-outline" size={25} />;
    onAddTodoItem([
      {
        id: id,
        title: title,
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
              onPress={() => {
                onUpdateCameraOn(false);
                isBefore ? addNewItem(imgUri) : addAfterImg(imgUri);
              }}
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
