/**
 * @format
 */

import {registerScreens, registerRoot} from './src/navigation';
import {configureGoogleLogin} from './src/services/googleSigninConfig.tsx';

registerScreens();
registerRoot();

configureGoogleLogin();
