import React from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import {CustomButton, CustomButtonText} from '../styles/StyledComps';

interface Props {
  name?: string;
}
interface State {
  isSigninInProgress: boolean;
  isMounted: boolean;
}
class GoogleLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSigninInProgress: false,
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({isMounted: true});
  }

  componentWillUnmount() {
    this.setState({isMounted: false});
  }

  signIn = async () => {
    const {isMounted} = this.state;
    const useUser = this.props.userHook;
    const useMaintenance = this.props.maintenanceHook;
    const {onUpdateEmail} = useUser;
    const {onUpdateIsSocialLoggedIn} = useMaintenance;
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (isMounted) {
        this.setState({isSigninInProgress: false});
      }
      onUpdateEmail(userInfo.user.email);
      onUpdateIsSocialLoggedIn(true);
    } catch (error) {
      if (isMounted) {
        this.setState({isSigninInProgress: false});
      }
      onUpdateIsSocialLoggedIn(false);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // Alert.alert('로그인 실패. 다시 시도해주세요');
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
    const {isSigninInProgress, isMounted} = this.state;

    return (
      <>
        <CustomButton
          style={{shadowOffset: {width: 3, height: 5}}}
          onPress={() => {
            this.signIn();
            if (isMounted) {
              this.setState({isSigninInProgress: true});
            }
          }}
          disabled={isSigninInProgress}>
          <CustomButtonText>구글로 계속 할래요</CustomButtonText>
        </CustomButton>
      </>
    );
  }
}

export default GoogleLogin;
