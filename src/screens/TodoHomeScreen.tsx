import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {View} from 'react-native';
import MemberListView from '../components/MemberListView';
import ClickedMemberTodoView from '../components/ClickedMemberTodoView';
import styles from '../styles';
import useView from '../hooks/useView';

function TodoHomeScreen(): JSX.Element {
  const {cameraOn, isAddBtnClicked} = useView();

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
        {isAddBtnClicked ? <View style={styles.greyOutView} /> : null}
        {cameraOn ? <View style={styles.greyOutMemberList} /> : null}
        <MemberListView />
        <ClickedMemberTodoView />
      </SafeAreaView>
    </>
  );
}

export default TodoHomeScreen;
