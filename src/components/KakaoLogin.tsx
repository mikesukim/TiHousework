import React from 'react';
import {Alert} from 'react-native';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import {CustomButton, CustomButtonText} from '../styled-components/StyledComps';

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
      .catch(error => {
        console.log(error);
      });
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
          console.log(error);
          Alert.alert('로그인에 실패했어요. 다시 시도해주세요.');
        });
    });
  };

  render(): JSX.Element {
    return (
      <>
        <CustomButton
          style={{shadowOffset: {width: 3, height: 5}}}
          // onPress={this.getProfile}
          onPress={Alert.alert('준비중입니다..')}>
          <CustomButtonText>카카오톡으로 계속 할래요</CustomButtonText>
        </CustomButton>
      </>
    );
  }
}

export default KakaoLogin;
