import React from 'react'
import styled from 'styled-components/native'
// import colors from './colors.ts' //이거 왜 안되지 
// import logoimg from '../img/logo.png'

export const Wrapper = styled.View`
    background: #008388;
    flex: 1;
    display: flex;
`;

export const WelcomeWrapper = styled.View`
    flex: 1;
    display: flex;
    marginTop: 30px;
    padding: 20px;
`;

export const Logo = styled.Image`
    width: 50px;
    height: 50px;
    marginTop: 50px;
    marginBottom: 40px;
`;

// Logo.defaultProps = {
//     source: logoimg,
// }

export const WelcomeText = styled.Text`
    font-size: 30px;
    color: #ffffff;
    fontWeight: 300;
    marginBottom: 40px;
`;

export const RoundedButton = styled.TouchableHighlight`
    padding: 15px;
    display: flex;
    borderRadius: 40px;
    borderWidth: 1px;
    borderColor: #aaaaaa;
    marginBottom: 15px;
`;

export const ButtonText = styled.Text`
    fontSize: 16px;
    width: 100%;
    textAlign: center;
    color: #aaaaaa;
`;

// export const ButtonsWrapper = styled.View`
// `;
