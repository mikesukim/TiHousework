import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer from '../redux';

import DefaultReactScreen from './DefaultReactScreen.tsx';
import SocialLogin from '../components/SocialLogin';

const store = createStore(rootReducer);
const persistor = persistStore(store);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocialLogin />
      </PersistGate>
    </Provider>
  );
}

export default App;
