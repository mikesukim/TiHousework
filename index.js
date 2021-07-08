/**
 * @format
 */

// import {registerScreens, registerRoot} from './src/navigation';


// registerScreens();
// registerRoot();



import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/screens/App.tsx';
import {configureGoogleLogin} from './src/services/googleSigninConfig.tsx';

configureGoogleLogin();
AppRegistry.registerComponent(appName, () => App);