import React, {useRef} from 'react';
import {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {RNCamera} from 'react-native-camera';
import SafeAreaView from 'react-native-safe-area-view';

function TodoList(): JSX.Element {
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
      <>
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
      </>
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
  const todolist = [
    {
      id: '0',
      title: '설거지 하기',
    },
    {
      id: '1',
      title: '성심이 산책시키기',
    },
    {
      id: '2',
      title: '화장실 청소하기',
    },
    {
      id: '3',
      title: '설거지 하기',
    },
    {
      id: '4',
      title: '성심이 산책시키기',
    },
    {
      id: '5',
      title: '화장실 청소하기',
    },
    {
      id: '6',
      title: '설거지 하기',
    },
    {
      id: '7',
      title: '성심이 산책시키기',
    },
    {
      id: '8',
      title: '화장실 청소하기',
    },
  ];

  const Item = ({title}) => {
    const [leftActionActivated, setLeftActionActivated] = useState(false);
    const [toggle, setToggle] = useState(false);
    const leftContent = [
      <TouchableOpacity
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Image
          style={{width: 35, height: 35, alignSelf: 'center'}}
          source={require('../img/done.png')}
        />
      </TouchableOpacity>,
    ];
    const rightContent = [
      <TouchableOpacity
        style={{
          height: 60,
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 35, height: 35}}
          source={require('../img/camera.png')}
        />
      </TouchableOpacity>,
    ];
    return (
      <>
        <Swipeable
          leftActionActivationDistance={50}
          rightActionActivationDistance={100}
          onLeftActionActivate={() => setLeftActionActivated(true)}
          onLeftActionDeactivate={() => setLeftActionActivated(false)}
          onLeftActionComplete={() => setToggle(prevState => !prevState)}
          onRightActionComplete={() => setCameraOn(true)}
          leftContent={leftContent}
          rightContent={rightContent}>
          <TouchableOpacity
            style={{
              height: 60,
              width: '84%',
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 5,
              shadowColor: '#000000',
              shadowRadius: 3,
              shadowOpacity: 0.2,
              shadowOffset: {width: 2, height: 4},
              backgroundColor: toggle ? 'darkseagreen' : 'white',
            }}>
            <Text style={{fontFamily: 'NotoSerifKR-SemiBold'}}>{title}</Text>
          </TouchableOpacity>
        </Swipeable>
      </>
    );
  };

  const renderItem = ({item}) => {
    return <Item title={item.title} />;
  };

  if (cameraOn) {
    return renderCamera();
  }
  return (
    <>
      <FlatList
        style={{paddingTop: 40}}
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}
        data={todolist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
    </>
  );
}

export default TodoList;
