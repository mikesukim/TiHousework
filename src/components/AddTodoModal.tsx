import React, {useState} from 'react';
import {KeyboardAvoidingView, Modal, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import {useNavigation} from '@react-navigation/native';
import useTodo from '../hooks/useTodo';
import useView from '../hooks/useView';
import styles from '../styles';

function AddTodoModal({isUpdatingTitle, item}): JSX.Element {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const {isAddBtnClicked, onUpdateIsAddBtnClicked} = useView();
  const {todoItem, onAddTodoItem, onUpdateTitle} = useTodo();
  const keyboardHeight = useKeyboardHeight();
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
  const updateTitle = text => {
    onUpdateTitle(item.id, text);
  };

  return (
    <Modal animationType="slide" transparent visible={isAddBtnClicked}>
      <TouchableOpacity
        style={styles.entireScreen}
        onPressOut={() => {
          onUpdateIsAddBtnClicked(false);
        }}>
        <KeyboardAvoidingView
          style={[styles.todoListItem, styles.addTodoModal(keyboardHeight)]}>
          <TextInput
            placeholder="집안일을 입력해주세요..."
            autoFocus
            returnKeyType="done"
            onChangeText={value => setText(value)}
            value={text}
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              onUpdateIsAddBtnClicked(false);
              isUpdatingTitle
                ? [updateTitle(text), navigation.navigate('Home')]
                : addNewItem(text);
              setText('');
            }}
          />
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
}

export default AddTodoModal;
