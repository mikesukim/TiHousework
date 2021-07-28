import React from 'react';
import {Text, View} from 'react-native';
import useView from '../hooks/useView';

function ClickedMemberTodoView(): JSX.Element {
  const {clickedUserName} = useView();
  return (
    <>
      {clickedUserName ? (
        <View style={{borderWidth: 1, margin: 20, height: 500}}>
          <Text>{clickedUserName}</Text>
        </View>
      ) : null}
    </>
  );
}

export default ClickedMemberTodoView;
