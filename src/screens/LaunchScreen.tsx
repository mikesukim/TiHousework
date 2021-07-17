import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Loading from '../components/Loading';
import LoginRegisterMW from '../components/LoginRegisterMW';
import SocialLogin from '../components/SocialLogin';
import useMaintenance from '../hooks/useMaintenance';
import {
  Header2,
  Header3,
  Image1,
  LogoText,
  View1,
  View2,
  View3,
  View4,
} from '../styled-components/StyledComps';

function LaunchScreen(): JSX.Element {
  const {isLoginInProcess} = useMaintenance();
  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <LoginRegisterMW />
      {isLoginInProcess ? <Loading /> : null}
      <View1>
        <View3>
          <LogoText>티집살림</LogoText>
          <Header2>티 안나는 집안일, 티나게 하자!</Header2>
          <Header3>우리의 집안일을 같이 하러 가볼까요?</Header3>
        </View3>
        <View2>
          <Image1 source={require('../img/11.jpeg')} />
        </View2>
        <View4>
          <SocialLogin />
        </View4>
      </View1>
    </SafeAreaView>
  );
}

export default LaunchScreen;
