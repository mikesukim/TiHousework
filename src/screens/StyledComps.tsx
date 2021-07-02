import styled from 'styled-components/native';
import React, {Component} from 'react';
import {Dimensions} from 'react-native'; 

const deviceHeight = Dimensions.get('window').height;

const ResponsiveSize = size => {
  if (deviceHeight >= 568 && deviceHeight <= 667) {
    return size;
  }
  if (deviceHeight > 667 && deviceHeight <= 844) {
    return size * 1.17;
  }
  if (deviceHeight > 844 && deviceHeight <= 844 ) {
    return size * 1.8;
  }
};

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
  font-size: 13;
  color: #000000;
`;

export const Header2 = styled.Text`
  font-size: 23;
  font-weight: 600;
  color: #000000;
`;

export const Header3 = styled.Text`
  font-size: 15;
  font-weight: 300;
  color: #000000;
  margin-top: 3%;
  line-height: 25;
`;

const BtnContainder = styled.TouchableOpacity`
  margin-right: 70px;
  margin-top: 140px;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-right: 22px;
  padding-left: 22px;
  position: absolute;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
  background-color: ${props => props.bgColor};
`;

const BtnText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const SendBtn = ({onPress, title, bgColor}) => (
  <BtnContainder onPress={onPress} bgColor={bgColor}>
    <BtnText>{title}</BtnText>
  </BtnContainder>
);
