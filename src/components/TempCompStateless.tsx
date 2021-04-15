import React from 'react';
import {Text} from 'react-native';

interface props {
  name?: string;
}

function TempCompStateless({name}: props): JSX.Element {
  return <Text>Hello {name} </Text>;
}

TempCompStateless.defaultProps = {
  name: 'john',
};

export default TempCompStateless;
