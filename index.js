/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {name as appName} from './app.json';
import App from './src/App.tsx';

Navigation.registerComponent(`com.${appName}.RootScreen`, () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: `com.${appName}.RootScreen`,
            },
          },
        ],
      },
    },
  });
});
