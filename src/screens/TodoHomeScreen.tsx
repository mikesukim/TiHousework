import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import MemberListView from '../components/MemberListView';
import SelectedView from '../components/SelectedView';

function TodoHomeScreen(): JSX.Element {
  const [name, setName] = useState(null);
  const myCallback = name => {
    setName(name);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <MemberListView callbackFromParent={myCallback} />
        <SelectedView nameFromParent={name} />
      </SafeAreaView>
    </>
  );
}

export default TodoHomeScreen;
