import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Test from '../screens/Test.tsx';

function Navigation(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Test"
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
        headerShown: false,
      }}>
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}

export default Navigation;
