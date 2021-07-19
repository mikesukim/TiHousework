import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Header1 = styled.Text`
  font-weight: bold;
  font-size: ${RFPercentage(5)};
  color: #000000;
  font-family: 'Montserrat-ExtraLight';
  text-align: center;
`;

export const Header2 = styled.Text`
  font-size: ${RFPercentage(3)};
  color: rgb(35, 50, 56);
  font-family: 'Montserrat-Light';
  text-align: center;
  marginBottom: 10px;
`;

export const Header3 = styled.Text`
  font-size: ${RFPercentage(3)};
  color: rgb(35, 50, 56);
  font-family: 'Montserrat-Light';
  text-align: center;
  marginBottom: 10px;
`;

// marginTop: 40px;
export const LogoText = styled.Text`
  alignSelf: center;
  font-family: 'Montserrat-Black';
  font-size: ${RFPercentage(4)};
  color: rgb(35, 50, 56);
  marginBottom: 20px;
`;

export const CustomButton = styled.Pressable`
  width: 90%;
  padding: 15px;
  marginBottom: 15px;
  alignSelf: center;
  borderRadius: 40px;
  borderWidth: 1px;
  borderColor: #dae2eb;
  backgroundColor: white;
  shadowColor: #000;
  shadowOpacity: 0.2;
  shadowRadius: 2;
  elevation: 4;
`;

export const CustomButtonText = styled.Text`
  fontSize: 16px;
  width: 100%;
  textAlign: center;
  color: rgb(35, 50, 56);
`;

export const View1 = styled.View`
  flex: 1;
  position: relative;
`;

export const IntroImage = styled.Image`
  width: 170%;
  height: 100%;
  resizeMode: contain;
  alignSelf: center;
`;

export const IntroTopView = styled.View`
  position: absolute;
  height: 25%;
  width: 100%;
  zIndex: 2;
  paddingTop: 40px;
`;

export const IntroMiddleView = styled.View`
  flex: 1;
  marginTop: 100;
  marginBottom: 50;
`;

export const IntroBottomView = styled.View`
  position: absolute;
  height: 20%;
  width: 100%;
  zIndex: 2;
  bottom: 5px;
  justifyContent: center;
`;

export const IntroTextContainer = styled.View`
  alignSelf: center;
  marginBottom: 15px;
`;
