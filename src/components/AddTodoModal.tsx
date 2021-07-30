import React from 'react';
import {Modal, Text, View} from 'react-native';
import useView from '../hooks/useView';
import styles from '../styles';

function AddTodoModal(): JSX.Element {
  const {isAddBtnClicked} = useView();
  return (
    <Modal animationType="slide" transparent visible={isAddBtnClicked}>
      <View style={[styles.todoListItem, styles.addTodoModal]}>
        <Text>새 집안일을 추가해주세요...</Text>
      </View>
    </Modal>
  );
}

export default AddTodoModal;
