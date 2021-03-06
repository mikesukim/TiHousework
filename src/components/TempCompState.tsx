import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name?: string;
}
interface State {
  value: number;
}
class TempCompState extends React.Component<Props, State> {
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

TempCompState.defaultProps = {
  name: 'John',
};

export default TempCompState;
