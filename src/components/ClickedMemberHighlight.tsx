import React from 'react';
import {View} from 'react-native';
import useView from '../hooks/useView';
import styles from '../styles';

function ClickedMemberHighlight({item}): JSX.Element {
  const {clickedUserId} = useView();
  if (item.id === clickedUserId) {
    return <View style={styles.highlight} />;
  }
  return <></>;
}

export default ClickedMemberHighlight;
