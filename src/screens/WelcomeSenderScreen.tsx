import React from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useUser from '../hooks/useUser.tsx';
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

function WelcomeSenderScreen(): JSX.Element {
  const {onUpdateRoomID} = useUser();
  const navigation = useNavigation();

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
              // room ID는 어떻게 만들어줄건지?
              onUpdateRoomID('1');
              Alert.alert('새로운 방이 만들어졌어요');
              navigation.navigate('TodoScreenTemp');
            }}>
            <CustomButtonText>방에 들어갈게요</CustomButtonText>
          </CustomButton>
          <ResetRedux />
        </View4>
      </View1>
    </SafeAreaView>
  );
}

export default WelcomeSenderScreen;
