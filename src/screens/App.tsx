import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SplashScreen from 'react-native-splash-screen';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer from '../redux';

import SocialLogin from '../components/SocialLogin';
import ApiTestComp from '../components/ApiTestComp';
import CheckInvitation from '../components/CheckInvitation';

const store = createStore(rootReducer);
const persistor = persistStore(store);

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CheckInvitation />
        <SocialLogin />
        <ApiTestComp />
      </PersistGate>
    </Provider>
  );
}

export default App;
