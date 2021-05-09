import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from '../redux';
import DefaultReactScreen from './DefaultReactScreen';
import SocialLogin from '../components/SocialLogin';

const store = createStore(rootReducer);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SocialLogin />
    </Provider>
  );
}

export default App;
