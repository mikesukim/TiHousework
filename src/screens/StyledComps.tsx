import styled from 'styled-components/native';
import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 8% 8%;
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
`;

export const Header2 = styled.Text`
  font-size: ${RFPercentage(3)};
  font-weight: 600;
  color: #000000;
  font-family: 'Montserrat-Black';
`;

export const Header3 = styled.Text`
  font-size: ${RFPercentage(2)};
  font-weight: 300;
  color: #000000;
  margin-top: 3%;
  line-height: 25;
  font-family: 'Montserrat-Light';
`;

const BtnContainer = styled.TouchableOpacity`
  margin-right: 70px;
  margin-top: 140px;
  padding: 25px 25px 25px 25px;
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

export const SendBtn = ({onPress, title, bgColor}) => (
  <BtnContainer onPress={onPress} bgColor={bgColor}>
    <BtnText>{title}</BtnText>
  </BtnContainer>
);
