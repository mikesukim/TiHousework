import React, {useRef} from 'react';
import {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import SafeAreaView from 'react-native-safe-area-view';

function CameraTest(): JSX.Element {
  const [imgUri, setImgUri] = useState('');
  const [cameraOn, setCameraOn] = useState(false);

  const camera = useRef();
  const takePicture = async () => {
    if (camera.current) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      setImgUri(data.uri);
      console.log(data.uri);
    }
  };

  const renderCamera = () => {
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <RNCamera style={{flex: 1, alignItems: 'center'}} ref={camera} />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => takePicture()}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCameraOn(false)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> DONE </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

  if (cameraOn) {
    return renderCamera();
  }
  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <Button
        title="take a picture"
        onPress={() => {
          setCameraOn(true);
        }}
      />
    </SafeAreaView>
  );
}

export default CameraTest;
