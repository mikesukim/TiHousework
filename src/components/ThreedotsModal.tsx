import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import useTodo from '../hooks/useTodo';
import useView from '../hooks/useView';
import styles from '../styles';
import AddTodoModal from './AddTodoModal';

function ThreedotsModal({isDotsClicked, setIsDotsClicked, item}): JSX.Element {
  const navigation = useNavigation();
  const {onRemoveTodoItem} = useTodo();
  const {onUpdateIsAddBtnClicked} = useView();
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Modal animationType="none" transparent visible={isDotsClicked}>
        <TouchableOpacity
          style={styles.entireScreen}
          onPressOut={() => {
            setIsDotsClicked(false);
          }}>
          <View style={[styles.todoListItem, styles.threedotsModal]}>
            <TouchableOpacity
              style={styles.threedotsModalItem}
              onPress={() => {
                setIsDotsClicked(false);
                onUpdateIsAddBtnClicked(true);
                setIsUpdatingTitle(true);
              }}>
              <Text style={{fontFamily: 'NotoSerifKR-Regular'}}>수정하기</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />
            <TouchableOpacity
              style={styles.threedotsModalItem}
              onPress={() => {
                setIsClicked(true);
                setIsDotsClicked(false);
                onRemoveTodoItem(item.id);
                navigation.navigate('Home');
              }}>
              <Text style={{fontFamily: 'NotoSerifKR-Regular'}}>삭제하기</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <AddTodoModal isUpdatingTitle={isUpdatingTitle} item={item} />
    </>
  );
}

export default ThreedotsModal;
