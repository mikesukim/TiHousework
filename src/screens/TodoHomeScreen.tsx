import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import MemberListView from '../components/MemberListView';
import ClickedMemberTodoView from '../components/ClickedMemberTodoView';

function TodoHomeScreen(): JSX.Element {
  const [name, setName] = useState(null);
  const myCallback = name => {
    setName(name);
  };

  return (
    <>
    {console.log('이것도?')}
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#EBE9E0'}}
        forceInset={{top: 'always'}}>
        <MemberListView callbackFromParent={myCallback} />
        <ClickedMemberTodoView nameFromParent={name} />
      </SafeAreaView>
    </>
  );
}

export default TodoHomeScreen;
