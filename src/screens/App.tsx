import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from '../redux';
import DefaultReactScreen from './DefaultReactScreen.tsx';
import SocialLogin from '../components/SocialLogin';

import dynamicLinks from '@react-native-firebase/dynamic-links'; 
import { Alert } from 'react-native';

const store = createStore(rootReducer);

function App(): JSX.Element {
  const handleDynamicLink = link => {
    // alert(JSON.stringify(link));
    // alert(link.url);

    if (link.url === 'https://google.com') {
      alert(JSON.stringify('This is google page'));
    }

    if (link.url === 'https://naver.com') {
      alert(JSON.stringify('This is naver page!'));
    }

    // // Handle dynamic link inside your own application
    // if (link.url === 'https://invertase.io/offer') {
    //   // ...navigate to your offers screen
    // }
  };

  React.useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();

    // dynamicLinks()
    // .getInitialLink()
    // .then(link => {
    //   if (link.url === 'https://invertase.io/offer') {
    //     // ...set initial route as offers screen
    //   }
    // });
  }, []);

  return (
    <Provider store={store}>
      <SocialLogin />
    </Provider>
  );
}

export default App;
