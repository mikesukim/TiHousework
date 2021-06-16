import {Navigation} from 'react-native-navigation';
import {name as appName} from '../../app.json';
import {SCREENS} from '../constants/screen.tsx';

import App from '../screens/App.tsx';
import DefaultReactScreen from '../screens/DefaultReactScreen.tsx';
import ClockScreen from '../screens/ClockScreen.tsx';
import HelloScreen from '../screens/HelloScreen.tsx';
import JiyunScreen from '../screens/JiyunScreen';

export function registerScreens(): void {
  Navigation.registerComponent(SCREENS.Root, () => App);
  Navigation.registerComponent(SCREENS.DefaultReact, () => DefaultReactScreen);
  Navigation.registerComponent(SCREENS.Clock, () => ClockScreen);
  Navigation.registerComponent(SCREENS.Hello, () => HelloScreen);
  Navigation.registerComponent(SCREENS.Welcome, () => JiyunScreen);
}

export function registerRoot(): void {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: SCREENS.Root,
              },
            },
          ],
          // options: {
          //   topBar: {
          //     visible: false,
          //   }
          // }
        },
      },
    });
  });
}
