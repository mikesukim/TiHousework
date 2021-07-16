import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Test from '../screens/Test.tsx';
import InvitationScreen from '../screens/InvitationScreen';
import WelcomeSenderScreen from '../screens/WelcomeSenderScreen';
import WelcomeReceiverScreen from '../screens/WelcomeReceiverScreen';
import TodoScreenTemp from '../screens/TodoScreenTemp';

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
      <Stack.Screen name="InvitationScreen" component={InvitationScreen} />
      <Stack.Screen
        name="WelcomeSenderScreen"
        component={WelcomeSenderScreen}
      />
      <Stack.Screen
        name="WelcomeReceiverScreen"
        component={WelcomeReceiverScreen}
      />
      <Stack.Screen name="TodoScreenTemp" component={TodoScreenTemp} />
    </Stack.Navigator>
  );
}

export default Navigation;
