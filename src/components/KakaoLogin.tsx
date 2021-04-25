import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

interface Props {
  name?: string;
}
interface State {
  value: number;
}
class KakaoLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {value: 7};
  }

  signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    console.log(token);
  };

  render(): JSX.Element {
    const {name} = this.props;
    const {value} = this.state;
    return (
      <View>
        <Button title="Kakao Login" onPress={this.signInWithKakao} />
      </View>
    );
  }
}

KakaoLogin.defaultProps = {
  name: 'John',
};

export default KakaoLogin;
