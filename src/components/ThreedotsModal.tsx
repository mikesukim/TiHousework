import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import useTodo from '../hooks/useTodo';
import styles from '../styles';

function ThreedotsModal({state, setState, item}): JSX.Element {
  const navigation = useNavigation();
  const {todoItem, onAddTodoItem, onRemoveTodoItem} = useTodo();
  const addNewItem = text => {
    let id = 0;
    if (todoItem.length !== 0) {
      id = Math.max(...todoItem.map(item => item.id)) + 1;
    }
    onAddTodoItem([
      {
        id,
        title: text,
        name: '지윤',
        done: false,
        beforeImgUri: '',
        afterImgUri: '',
      },
    ]);
  };
  return (
    <Modal animationType="none" transparent visible={state}>
      <TouchableOpacity
        style={styles.entireScreen}
        onPressOut={() => {
          setState(false);
        }}>
        <View style={[styles.todoListItem, styles.threedotsModal]}>
          <TouchableOpacity style={styles.threedotsModalItem}>
            <Text style={{fontFamily: 'NotoSerifKR-Regular'}}>수정하기</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />
          <TouchableOpacity
            style={styles.threedotsModalItem}
            onPress={() => {
              setState(false);
              onRemoveTodoItem(item.id);
              navigation.navigate('Home');
            }}>
            <Text style={{fontFamily: 'NotoSerifKR-Regular'}}>삭제하기</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default ThreedotsModal;
