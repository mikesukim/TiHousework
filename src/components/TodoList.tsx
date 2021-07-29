import React from 'react';
import {useState} from 'react';
import {FlatList, Image, Platform, Text, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-swipeable';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import AddFloatingButton from './AddFloatingButton';
import Camera from './Camera';

function TodoList(): JSX.Element {
  const [cameraOn, setCameraOn] = useState(false);

  // haptic feedback
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const hapticTriggerType = Platform.select({
    ios: 'selection',
    android: 'impactMedium',
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
          onLeftActionActivate={() => {
            setLeftActionActivated(true);
            ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
          }}
          onLeftActionDeactivate={() => setLeftActionActivated(false)}
          onLeftActionComplete={() => setToggle(prevState => !prevState)}
          onRightActionActivate={() => {
            ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
          }}
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
    return <Camera setStateFromParent={setCameraOn} />;
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
      <AddFloatingButton />
    </>
  );
}

export default TodoList;
