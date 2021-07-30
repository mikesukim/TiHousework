import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import MemberListView from '../components/MemberListView';
import ClickedMemberTodoView from '../components/ClickedMemberTodoView';
import styles from '../styles';

function TodoHomeScreen(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
        {modalVisible ? <View style={styles.greyOutView} /> : null}
        <MemberListView />
        {/* 여기 state랑 addFloatingButton state랑 같으면 됨. */}
        <Modal animationType="slide" transparent visible={modalVisible}>
          <View style={[styles.todoListItem, styles.addTodoModal]}>
            <Text>새 집안일을 추가해주세요...</Text>
          </View>
        </Modal>
        <Button title="click" onPress={() => setModalVisible(true)} />
        <ClickedMemberTodoView />
      </SafeAreaView>
    </>
  );
}

export default TodoHomeScreen;
