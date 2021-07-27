import React from 'react';
import {View} from 'react-native';
import useView from '../hooks/useView';

function ClickedMemberHighlight({item}): JSX.Element {
  const {clickedUserId} = useView();
  if (item.id === clickedUserId) {
    return (
      <View
        style={{
          backgroundColor: 'red',
          height: 66,
          width: 66,
          position: 'absolute',
          borderRadius: 40,
          zIndex: 1,
        }}
      />
    );
  }
  return <></>;
}

export default ClickedMemberHighlight;
