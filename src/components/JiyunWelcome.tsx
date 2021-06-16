import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import useUser from '../hooks/useUser';

function JiyunWelcome(): JSX.Element {
  const {email} = useUser();

  return (
    <View>
      <Text>Hello! Your email is {email}. Now you are logged in.</Text>
      <Text>Welcome to TiHousework!</Text>
    </View>
  );
}

export default JiyunWelcome;
