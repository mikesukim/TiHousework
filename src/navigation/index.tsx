import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Test from '../screens/Test.tsx';
import InvitationScreenTemp from '../components/InvitationScreenTemp.tsx'

function Navigation(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Test">
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Invitation" component={InvitationScreenTemp} />
    </Stack.Navigator>
  );
}

export default Navigation;
