import React, {useState, useEffect} from 'react';
import {
  Button,
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import AddFloatingButton from './AddFloatingButton';
import Camera from './Camera';
import styles from '../styles';
import useView from '../hooks/useView';

function TodoList(): JSX.Element {
  // 리덕스 때문에 불필요하게 리렌더되는 부분 없나?
  const {cameraOn, todoItem, onUpdateCameraOn, onRemoveTodoItem} = useView();
  // haptic feedback
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const hapticTriggerType = Platform.select({
    ios: 'selection',
    android: 'impactMedium',
  });

  const Item = ({title, id}) => {
    const [toggle, setToggle] = useState(false);
    const leftContent = [
      <TouchableOpacity style={styles.swipeLeftContent}>
        <Image
          style={{width: 35, height: 35, alignSelf: 'center'}}
          source={require('../img/done.png')}
        />
      </TouchableOpacity>,
    ];
    const rightContent = [
      <TouchableOpacity style={styles.swipeRightContent}>
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
            ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
          }}
          onLeftActionComplete={() => setToggle(prevState => !prevState)}
          onRightActionActivate={() => {
            ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
          }}
          onRightActionComplete={() => onUpdateCameraOn(true)}
          leftContent={leftContent}
          rightContent={rightContent}>
          <TouchableOpacity
            style={[
              styles.todoListItem,
              {backgroundColor: toggle ? 'darkseagreen' : 'white'},
            ]}>
            <Text style={{fontFamily: 'NotoSerifKR-SemiBold'}}>{title}</Text>
          </TouchableOpacity>
          <Button
            title="삭제"
            onPress={() => {
              onRemoveTodoItem(id);
            }}
          />
        </Swipeable>
      </>
    );
  };

  const renderItem = ({item}) => {
    return <Item title={item.title} id={item.id} />;
  };

  if (cameraOn) {
    return <Camera />;
  }
  return (
    <>
      <FlatList
        style={{paddingTop: 40}}
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}
        data={todoItem}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
        // extraData={selectedId}
      />
      <AddFloatingButton />
    </>
  );
}

export default TodoList;
