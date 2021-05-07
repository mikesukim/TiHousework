import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SplashScreen from 'react-native-splash-screen';

import rootReducer from '../redux';
import DefaultReactScreen from './DefaultReactScreen';
import SocialLogin from '../components/SocialLogin';

const store = createStore(rootReducer);

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SocialLogin />
    </Provider>
  );
}

export default App;
