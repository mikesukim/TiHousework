import styled from 'styled-components/native';
import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 8%;
`;

export const TopContainer = styled.View`
  border-bottom-color: black;
  border-bottom-width: 0.4px;
  padding-bottom: 7%;
`;

export const BottomContainer = styled.View`
  padding-top: 6%;
`;

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
  font-family: 'IropkeBatangM';
  text-align: center;
  marginBottom: 10px;
`;

export const Header3 = styled.Text`
  font-size: ${RFPercentage(3)};
  color: rgb(35, 50, 56);
  font-family: 'IropkeBatangM';
  text-align: center;
  marginBottom: 10px;
`;

const BtnContainer = styled.TouchableOpacity`
  margin-right: 70px;
  margin-top: 140px;
  padding: 25px;
  position: absolute;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
  background-color: ${props => props.bgColor};
`;

const BtnText = styled.Text`
  font-family: 'Montserrat-Light';
  font-size: ${RFPercentage(2)};
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const LogoText = styled.Text`
  alignSelf: center;
  font-family: 'Montserrat-Black';
  font-size: ${RFPercentage(4)};
  color: rgb(35, 50, 56);
  marginTop: 40px;
  marginBottom: 20px;
`;

export const SocialLoginButton = styled.Pressable`
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

export const SocialLoginButtonText = styled.Text`
  fontSize: 16px;
  width: 100%;
  textAlign: center;
  color: rgb(35, 50, 56);
`;

export const SendBtn = ({onPress, title, bgColor}) => (
  <BtnContainer onPress={onPress} bgColor={bgColor}>
    <BtnText>{title}</BtnText>
  </BtnContainer>
);

export const View1 = styled.View`
  flex: 1;
  position: relative;
`;

export const View2 = styled.View`
  flex: 1;
  marginTop: 100;
  marginBottom: 50;
`;

export const Image1 = styled.Image`
  width: 170%;
  height: 100%;
  resizeMode: contain;
  alignSelf: center;
`;

export const View3 = styled.View`
  position: absolute;
  height: 25%;
  width: 100%;
  zIndex: 2;
`;

export const View4 = styled.View`
  position: absolute;
  height: 20%;
  width: 100%;
  zIndex: 2;
  bottom: 0;
  justifyContent: center;
`;
