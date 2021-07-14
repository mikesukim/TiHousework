import React from 'react';
import {Alert, View} from 'react-native';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import {
  ButtonWrapper,
  SocialLoginButton,
  SocialLoginButtonText,
} from '../styled-components/StyledComps';

interface Props {
  name?: string;
}
interface State {
  value: number;
}
class KakaoLogin extends React.Component<Props, State> {
  signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login()
      .then(function (token) {
        console.log('Kakao Login Succeed');
        console.log(JSON.stringify(token));
      })
      .catch(error => console.log(error));
  };

  getProfile = async (): Promise<void> => {
    const useMaintenance = this.props.maintenanceHook;
    const {onUpdateIsSocialLoggedIn} = useMaintenance;
    this.signInWithKakao().then(async () => {
      const profile: KakaoProfile = await getKakaoProfile()
        .then(function (profile) {
          onUpdateIsSocialLoggedIn(true);
          console.log('Kakao getProfile Succeed');
          console.log(JSON.stringify(profile));
        })
        .catch(error => {
          onUpdateIsSocialLoggedIn(false);
          if (error !== 'cancelled.') {
            Alert.alert('로그인 실패. 다시 시도해주세요');
          }
          console.log(error);
        });
    });
  };

  render(): JSX.Element {
    return (
      <>
        <SocialLoginButton
          style={{shadowOffset: {width: 3, height: 5}}}
          onPress={this.getProfile}>
          <SocialLoginButtonText>Continue with KakaoTalk</SocialLoginButtonText>
        </SocialLoginButton>
      </>
    );
  }
}

export default KakaoLogin;
