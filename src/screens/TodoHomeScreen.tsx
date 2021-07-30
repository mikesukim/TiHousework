import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import MemberListView from '../components/MemberListView';
import ClickedMemberTodoView from '../components/ClickedMemberTodoView';
import styles from '../styles';
import AddTodoModal from '../components/AddTodoModal';
import useView from '../hooks/useView';

function TodoHomeScreen(): JSX.Element {
  const {isAddBtnClicked} = useView();
  return (
    <>
      <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
        {isAddBtnClicked ? <View style={styles.greyOutView} /> : null}
        <MemberListView />
        <AddTodoModal />
        <ClickedMemberTodoView />
      </SafeAreaView>
    </>
  );
}

export default TodoHomeScreen;
