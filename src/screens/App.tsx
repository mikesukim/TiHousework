import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SplashScreen from 'react-native-splash-screen';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView} from 'react-native';
import rootReducer from '../redux';
import Test from '../screens/Test';

const store = createStore(rootReducer);
const persistor = persistStore(store);

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <InvitationTokenCheckMW /> */}
        <SafeAreaView>
          <Test />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
