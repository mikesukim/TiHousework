import React, {useState} from 'react';
import {FlatList, Image, Platform, Text, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-swipeable';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useNavigation} from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';
import AddFloatingButton from './AddFloatingButton';
import Camera from './Camera';
import styles from '../styles';
import useView from '../hooks/useView';
import useTodo from '../hooks/useTodo';
import AddTodoModal from './AddTodoModal';
import LottieComp from './LottieComp';

function TodoList(): JSX.Element {
  // 리덕스 때문에 불필요하게 리렌더되는 부분 없나?
  const {cameraOn} = useView();
  const {todoItem} = useTodo();
  const [selectedId, setSelectedId] = useState();

  // haptic feedback
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const hapticTriggerType = Platform.select({
    ios: 'selection',
    android: 'impactMedium',
  });

  const Item = ({item, index}) => {
    const {onUpdateCameraOn, onUpdateIsBefore} = useView();
    const {onToggleTodoDone} = useTodo();
    const navigation = useNavigation();
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
          rightActionActivationDistance={50}
          onLeftActionActivate={() => {
            ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
          }}
          onLeftActionComplete={() => {
            onToggleTodoDone(item.id);
            setSelectedId(item.id);
          }}
          onRightActionActivate={() => {
            ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
          }}
          onRightActionComplete={() => {
            onUpdateCameraOn(true);
            onUpdateIsBefore(false);
            setSelectedId(item.id);
          }}
          leftContent={leftContent}
          rightContent={rightContent}>
          <TouchableOpacity
            style={[
              styles.todoListItem,
              {backgroundColor: item.done ? 'darkseagreen' : 'white'},
            ]}
            onPress={() => {
              navigation.navigate('Details', {item});
            }}>
            <Text style={{fontFamily: 'NotoSerifKR-SemiBold'}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </Swipeable>
      </>
    );
  };

  const renderItem = ({item, index}) => {
    return <Item item={item} index={index} />;
  };

  if (cameraOn) {
    return <Camera selectedId={selectedId} />;
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
        extraData={selectedId}
      />
      <AddFloatingButton />
      <AddTodoModal />
      {/* <LottieComp selectedId={selectedId} /> */}
      {/* <ConfettiCannon count={40} origin={{x: -10, y: 0}} /> */}
    </>
  );
}

export default TodoList;
