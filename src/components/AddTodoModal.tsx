import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import useView from '../hooks/useView';
import styles from '../styles';

function AddTodoModal(): JSX.Element {
  const {isAddBtnClicked, onUpdateIsAddBtnClicked} = useView();
  return (
    <Modal animationType="slide" transparent visible={isAddBtnClicked}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onPressIn={() => {
          onUpdateIsAddBtnClicked(false);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.todoListItem, styles.addTodoModal]}>
          <Text>새 집안일을 추가해주세요...</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

export default AddTodoModal;
