/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {name as appName} from './app.json';
import App from './src/App.tsx';
import registerScreens from './src/screens/index.tsx';

Navigation.registerComponent(`com.${appName}.RootScreen`, () => App);
registerScreens();

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
