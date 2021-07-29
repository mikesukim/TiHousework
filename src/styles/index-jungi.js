import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff00;
  position: relative;
`;

export const InnerContainer = styled.View`
  margin-top: 50px;
  background-color: white;
`;

export const DataView = styled.View`
  flex: 1;
  background-color: #ffffff00;
  position: absolute;
  top: 50%;
  justify-content: center;
  left: 0;
  right: 0;
`;

export const SendBtn = styled.TouchableHighlight`
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
  background-color: #68a0cf;
  position: relative;
`;

export const TextInputBox = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
`;

export const H1 = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20;
`;
