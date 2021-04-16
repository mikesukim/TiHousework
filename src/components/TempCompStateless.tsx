import React from 'react';
import {Text} from 'react-native';

interface Props {
  name?: string;
}

function TempCompStateless({name}: Props): JSX.Element {
  return <Text>Hello {name} </Text>;
}

TempCompStateless.defaultProps = {
  name: 'john',
};

export default TempCompStateless;
