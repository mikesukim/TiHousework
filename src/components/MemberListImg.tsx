import React from 'react';
import {Image} from 'react-native';

function MemberListImg({src}): JSX.Element {
  return (
    <>
      <Image
        source={src}
        style={[
          {
            width: 62,
            height: 62,
            borderRadius: 40,
            zIndex: 2,
          },
        ]}
      />
    </>
  );
}

export default React.memo(MemberListImg);
