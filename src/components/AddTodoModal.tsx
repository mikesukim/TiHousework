import React, {useState} from 'react';
import {KeyboardAvoidingView, Modal, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import useTodo from '../hooks/useTodo';
import useView from '../hooks/useView';
import styles from '../styles';

function AddTodoModal(): JSX.Element {
  const [text, setText] = useState('');
  const {isAddBtnClicked, onUpdateIsAddBtnClicked} = useView();
  const {onAddTodoItem} = useTodo();
  const keyboardHeight = useKeyboardHeight();
  const addNewItem = text => {
    onAddTodoItem([
      {
        id: Math.random(),
        title: text,
        name: '지윤',
        done: false,
      },
    ]);
  };
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
        <KeyboardAvoidingView
          style={[styles.todoListItem, styles.addTodoModal(keyboardHeight)]}>
          <TextInput
            placeholder="새 집안일을 추가해주세요..."
            autoFocus
            returnKeyType="done"
            onChangeText={value => setText(value)}
            value={text}
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              onUpdateIsAddBtnClicked(false);
              addNewItem(text);
              setText('');
            }}
          />
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
}

export default AddTodoModal;
