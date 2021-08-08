import React from 'react';
import {Image} from 'react-native';
import useView from '../hooks/useView';
import styles from '../styles';

function MemberListImg({src, item}): JSX.Element {
  const {clickedUserId} = useView();
  return (
    <>
      <Image
        source={src}
        style={[
          styles.memberListImg,
          {opacity: item.id !== clickedUserId ? 0.5 : 1},
        ]}
      />
    </>
  );
}

export default React.memo(MemberListImg);
