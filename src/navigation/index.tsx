import {Navigation} from 'react-native-navigation';
import {name as appName} from '../../app.json';
import {SCREENS} from '../constants/screen.tsx';

import DefaultReactScreen from '../screens/DefaultReactScreen.tsx';
import ClockScreen from '../screens/ClockScreen.tsx';
import HelloScreen from '../screens/HelloScreen.tsx';

export function registerScreens(): void {
  Navigation.registerComponent(SCREENS.DefaultReact, () => DefaultReactScreen);
  Navigation.registerComponent(SCREENS.Clock, () => ClockScreen);
  Navigation.registerComponent(SCREENS.Hello, () => HelloScreen);
}

export function registerRoot(): void {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: SCREENS.DefaultReact,
              },
            },
          ],
        },
      },
    });
  });
}
