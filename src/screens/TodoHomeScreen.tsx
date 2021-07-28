import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import MemberListView from '../components/MemberListView';
import ClickedMemberTodoView from '../components/ClickedMemberTodoView';

function TodoHomeScreen(): JSX.Element {
  return (
    <>
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#EBE9E0'}}
        forceInset={{top: 'always'}}>
        <MemberListView />
        <ClickedMemberTodoView />
      </SafeAreaView>
    </>
  );
}

export default TodoHomeScreen;
