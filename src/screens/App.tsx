import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SplashScreen from 'react-native-splash-screen';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import rootReducer from '../redux';
import Navigation from '../navigation'
import {configureGoogleLogin} from '../services/googleSigninConfig';

const store = createStore(rootReducer);
const persistor = persistStore(store);

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
    configureGoogleLogin();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
