import React from 'react';
import {Image} from 'react-native';
import styles from '../styles';

function MemberListImg({src}): JSX.Element {
  return (
    <>
      <Image source={src} style={styles.memberListImg} />
    </>
  );
}

export default React.memo(MemberListImg);
