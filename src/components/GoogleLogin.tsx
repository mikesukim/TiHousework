import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

interface Props {
  name?: string;
}
interface State {
  value: number;
  isSigninInProgress: boolean;
}
class GoogleLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 7,
      isSigninInProgress: false,
    };
  }

  signIn = async () => {
    const useUser = this.props.userHook;
    const {onUpdateEmail} = useUser;
    const useMaintenance = this.props.maintenanceHook;
    const {onUpdateIsSocialLoggedIn} = useMaintenance;
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      onUpdateEmail(userInfo.user.email);
      onUpdateIsSocialLoggedIn(true);
      this.setState({isSigninInProgress: false});
    } catch (error) {
      onUpdateIsSocialLoggedIn(false);
      this.setState({isSigninInProgress: false});
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('로그인 실패. 다시 시도해주세요');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('로그인 실패. 다시 시도해주세요');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('로그인 실패. 다시 시도해주세요');
        // play services not available or outdated
      } else {
        Alert.alert('로그인 실패. 다시 시도해주세요');
        // some other error happened
      }
    }
  };

  render(): JSX.Element {
    const {value, isSigninInProgress} = this.state;
    return (
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          this.signIn();
          this.setState({isSigninInProgress: true});
        }}
        disabled={isSigninInProgress}
      />
    );
  }
}

export default GoogleLogin;
