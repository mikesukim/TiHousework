import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ResetRedux from '../components/ResetRedux';
import {
  CustomButton,
  CustomButtonText,
  Header2,
  Header3,
  Image1,
  LogoText,
  View1,
  View2,
  View3,
  View4,
} from '../styled-components/StyledComps';
import TodoScreenTemp from './TodoScreenTemp';

function OopsErrorScreen(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  if (isClicked) {
    return <TodoScreenTemp />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View1>
        <View3>
          <LogoText>두집살림?</LogoText>
          <Header2>Oops! </Header2>
          <Header3>혹시 번지수를 헷갈리셨나요?</Header3>
        </View3>
        <View2>
          <Image1
            source={require('../img/cannotFind.png')}
            style={{width: '140%'}}
          />
        </View2>
        <View4>
          <CustomButton
            style={{shadowOffset: {width: 3, height: 5}}}
            onPress={() => setIsClicked(true)}>
            <CustomButtonText>본가로 돌아가기</CustomButtonText>
          </CustomButton>
        </View4>
        <ResetRedux />
      </View1>
    </SafeAreaView>
  );
}

export default OopsErrorScreen;
