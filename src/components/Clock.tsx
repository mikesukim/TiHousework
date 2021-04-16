import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name?: string;
}
interface State {
  time: string;
}
class Clock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const dateTime = new Date();
    const currentTime = dateTime.toLocaleTimeString();
    this.state = {time: currentTime};
  }

  componentDidMount(): void {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalID);
  }

  tick(): void {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  render(): JSX.Element {
    const {time} = this.state;
    return (
      <View>
        <Text>Time: {time} </Text>
      </View>
    );
  }
}

Clock.defaultProps = {
  name: 'John',
};

export default Clock;
