import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Test from '../screens/Test.tsx';

function Navigation(): JSX.Element {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}

export default Navigation;
