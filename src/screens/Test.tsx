import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {Button, SafeAreaView} from 'react-native';
import {useState} from 'react';
import InvitationTokenCheckMW from '../components/InvitationTokenCheckMW';
import TodoHomeScreen from './TodoHomeScreen';
import styles from '../styles';
import {Header2} from '../styles/StyledComps';

function Test(): JSX.Element {
  const [usersNum, setUsersNum] = useState(0);
  const [userId, setUserId] = useState<string[]>([]);
  const allUsers = () => {
    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        setUsersNum(querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          setUserId(prevArr => [...prevArr, documentSnapshot.id]);
          console.log(documentSnapshot.data());
        });
      });
  };
  const addNewDoc = () => {
    firestore()
      .collection('users')
      // save as a useremail or a username
      .doc('jiyun')
      .set({
        email: 'ianjy1127@gmail.com',
        age: 27,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <>
      {/* <Text>src/screen 에 위치한 Test 컴포넌트에, 테스트하고싶은 컴포넌트를 추가해 테스트하세요</Text> */}
      {/* <InvitationTokenCheckMW /> */}
      {/* <TodoHomeScreen /> */}
      <SafeAreaView style={styles.safeAreaView} forceInset={{top: 'always'}}>
        <Button title="Get all users" onPress={allUsers} />
        <Header2>Total users: {usersNum}</Header2>
        {userId.map(i => (
          <Header2>User Id: {i}</Header2>
        ))}
        <Button title="Add a new user" onPress={addNewDoc} />
      </SafeAreaView>
    </>
  );
}

export default Test;
