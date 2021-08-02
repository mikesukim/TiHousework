import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Test from '../screens/Test.tsx';
import ClockScreen from '../screens/ClockScreen.tsx';
import HelloScreen from '../screens/HelloScreen.tsx';
import OopsErrorScreen from '../screens/OopsErrorScreen.tsx';
import TodoDetailsScreen from '../screens/TodoDetailsScreen.tsx';

function Navigation(): JSX.Element {
  const HomeStack = createStackNavigator();
  const StatisticStack = createStackNavigator();
  const CommunityStack = createStackNavigator();
  const SettingsStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerShown: false,
        }}>
        <HomeStack.Screen name="Home" component={Test} />
        <HomeStack.Screen name="Details" component={TodoDetailsScreen} />
      </HomeStack.Navigator>
    );
  }
  function StatisticStackScreen() {
    return (
      <StatisticStack.Navigator
        initialRouteName="Statistic"
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerShown: false,
        }}>
        <StatisticStack.Screen name="Statistic" component={ClockScreen} />
      </StatisticStack.Navigator>
    );
  }
  function CommunityStackScreen() {
    return (
      <CommunityStack.Navigator
        initialRouteName="Community"
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerShown: false,
        }}>
        <CommunityStack.Screen name="Community" component={HelloScreen} />
      </CommunityStack.Navigator>
    );
  }
  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerShown: false,
        }}>
        <SettingsStack.Screen name="Settings" component={OopsErrorScreen} />
      </SettingsStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Statistic') {
            iconName = 'stats-chart-outline';
          } else if (route.name === 'Community') {
            iconName = 'share-social-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }
          return <Icon name={iconName} size={29} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Statistic" component={StatisticStackScreen} />
      <Tab.Screen name="Community" component={CommunityStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

export default Navigation;
