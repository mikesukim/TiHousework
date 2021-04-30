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
    const token: KakaoOAuthToken = await login()
      .then(function (token) {
        console.log('Kakao Login Succeed');
        console.log(JSON.stringify(token));
      })
      .catch(error => console.log(error));
  };

  getProfile = async (): Promise<void> => {
    this.signInWithKakao().then(async () => {
      const profile: KakaoProfile = await getKakaoProfile()
        .then(function (profile) {
          console.log('Kakao getProfile Succeed');
          console.log(JSON.stringify(profile));
        })
        .catch(error => console.log(error));
    });
  };

  render(): JSX.Element {
    return (
      <View>
        <Button title="Kakao Login" onPress={this.getProfile} />
      </View>
    );
  }
}

KakaoLogin.defaultProps = {
  name: 'John',
};

export default KakaoLogin;
