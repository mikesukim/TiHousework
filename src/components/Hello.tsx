import React from 'react';
import {Text} from 'react-native';

interface props {
  name?: string;
}

function Hello({name}: props): JSX.Element {
  return <Text>Hello {name}</Text>;
}

Hello.defaultProps = {
  name: 'john',
};

export default Hello;
