import React from 'react';
import {Image} from 'react-native';

function MemberListImg({src}): JSX.Element {
  return (
    <>
      <Image
        source={src}
        style={[
          {
            width: 58,
            height: 58,
            borderRadius: 40,
            zIndex: 2,
          },
        ]}
      />
    </>
  );
}

export default React.memo(MemberListImg);
