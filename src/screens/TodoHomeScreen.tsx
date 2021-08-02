import React, {useState, useEffect} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {View, StatusBar, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MemberListView from '../components/MemberListView';
import ClickedMemberTodoView from '../components/ClickedMemberTodoView';
import styles from '../styles';
import useView from '../hooks/useView';

function TodoHomeScreen(): JSX.Element {
  const {cameraOn, isAddBtnClicked} = useView();
  const [isIos, setIsIos] = useState(false);
  const androidStatusBarHeight = StatusBar.currentHeight;
  const iosStatusBarHeight = getStatusBarHeight();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setIsIos(true);
    }
    if (Platform.OS === 'android') {
      setIsIos(false);
    }
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
        {isAddBtnClicked ? <View style={styles.greyOutView} /> : null}
        {cameraOn
          ? [
              isIos ? (
                <View style={styles.greyOutMemberList(iosStatusBarHeight)} />
              ) : (
                <View
                  style={styles.greyOutMemberList(androidStatusBarHeight)}
                />
              ),
            ]
          : null}
        <MemberListView />
        <ClickedMemberTodoView />
      </SafeAreaView>
    </>
  );
}

export default TodoHomeScreen;
