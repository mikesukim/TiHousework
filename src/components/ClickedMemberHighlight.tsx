import React from 'react';
import {View} from 'react-native';
import useView from '../hooks/useView';

function ClickedMemberHighlight({item}): JSX.Element {
  const {clickedUserId} = useView();
  if (item.id === clickedUserId) {
    return (
      <View
        style={{
          backgroundColor: '#EBE9E0',
          height: 74,
          width: 74,
          position: 'absolute',
          borderRadius: 40,
          zIndex: 1,
          borderWidth: 3,
          borderColor: 'red',
        }}
      />
    );
  }
  return <></>;
}

export default ClickedMemberHighlight;
