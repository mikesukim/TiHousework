import {animated, useTransition} from '@react-spring/native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Loading from '../components/Loading';
import LoginRegisterMW from '../components/LoginRegisterMW';
import SocialLogin from '../components/SocialLogin';
import useMaintenance from '../hooks/useMaintenance';
import {
  Header2,
  Header3,
  IntroBottomView,
  IntroImage,
  IntroMiddleView,
  IntroTextContainer,
  IntroTopView,
  LogoText,
  View1,
} from '../styled-components/StyledComps';

function LaunchScreen(): JSX.Element {
  const {isLoginInProcess} = useMaintenance();
  const items = [
    {title: <LogoText>티집살림</LogoText>},
    {title: <Header2>티 안나는 집안일, 티나게 하자!</Header2>},
    {title: <Header3>우리의 집안일을 같이 하러 가볼까요?</Header3>},
  ];
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      scale: 0.93,
    },
    enter: (txt, i) => ({
      delay: () => {
        return (i + 1) * 700;
      },
      opacity: 1,
      scale: 1,
    }),
  });
  const textTransition = transitions((style, txt) => {
    return (
      <IntroTextContainer>
        <animated.Text key={txt} style={style}>
          {txt.title}
        </animated.Text>
      </IntroTextContainer>
    );
  });

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <LoginRegisterMW />
      {isLoginInProcess ? <Loading /> : null}
      <View1>
        <IntroTopView>{textTransition}</IntroTopView>
        <IntroMiddleView>
          <IntroImage source={require('../img/11.jpeg')} />
        </IntroMiddleView>
        <IntroBottomView>
          <SocialLogin />
        </IntroBottomView>
      </View1>
    </SafeAreaView>
  );
}

export default LaunchScreen;
