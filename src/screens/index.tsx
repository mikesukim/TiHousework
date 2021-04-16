import {Navigation} from 'react-native-navigation';
import {name as appName} from '../../app.json';

import ClockScreen from './ClockScreen.tsx';
import HelloScreen from './HelloScreen.tsx';

export default function registerScreens(): void {
  Navigation.registerComponent(`com.${appName}.ClockScreen`, () => ClockScreen);
  Navigation.registerComponent(`com.${appName}.HelloScreen`, () => HelloScreen);
}
