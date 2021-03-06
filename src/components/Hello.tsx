import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name?: string;
}
interface State {
  value: number;
}
class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {value: 7};
  }

  render(): JSX.Element {
    const {name} = this.props;
    const {value} = this.state;
    return (
      <View>
        <Text>Hello {name} </Text>
        <Text>Value {value} </Text>
      </View>
    );
  }
}

Hello.defaultProps = {
  name: 'John',
};

export default Hello;
