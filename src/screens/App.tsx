import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from '../redux';
import DefaultReactScreen from './DefaultReactScreen.tsx';
import Counter from '../components/Counter';

const store = createStore(rootReducer);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
