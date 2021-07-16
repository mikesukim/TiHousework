import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Header2,
  Image1,
  LogoText,
  View1,
  View2,
  View3,
  View4,
  CustomButton,
  CustomButtonText,
} from '../styled-components/StyledComps';
import ResetRedux from '../components/ResetRedux';
import useUser from '../hooks/useUser';
import TodoScreenTemp from './TodoScreenTemp';

function WelcomeSenderScreen(): JSX.Element {
  const {roomID, onUpdateRoomID} = useUser();
  if (!roomID) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View1>
          <View3>
            <LogoText>환영합니다</LogoText>
            <Header2>초대 링크가 복사되었어요</Header2>
            <Header2>가족들에게 공유하고</Header2>
            <Header2>방에 입장하세요</Header2>
          </View3>
          <View2>
            <Image1 source={require('../img/welcome.jpeg')} />
          </View2>
          <View4>
            <CustomButton
              style={{shadowOffset: {width: 3, height: 5}}}
              onPress={() => {
                onUpdateRoomID('1');
              }}>
              <CustomButtonText>방에 들어갈게요</CustomButtonText>
            </CustomButton>
            <ResetRedux />
          </View4>
        </View1>
      </SafeAreaView>
    );
  }
  return <TodoScreenTemp />;
}

export default WelcomeSenderScreen;
