import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import SplashScreen from 'react-native-splash-screen';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer from '../redux';

import SocialLogin from '../components/SocialLogin';
import ApiTestComp from '../components/ApiTestComp';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';

const store = createStore(rootReducer);
const persistor = persistStore(store);

function App(): JSX.Element {
  // const {isInvited, onUpdateIsInvited} = useUser();
  const configDynamicLink = () => {
    const handleDynamicLink = link => {
      // onUpdateIsInvited(true);
      // // Handle dynamic link inside your own application
      // if (link.url === 'https://invertase.io/offer') {
      //   // ...navigate to your offers screen
      // }
      if (link.url === 'https://google.com') {
        alert(JSON.stringify('This is google page'));
      }
      if (link.url === 'https://naver.com') {
        alert(JSON.stringify('This is naver page!'));
      }
    };

    dynamicLinks()
      .getInitialLink()
      .then(link => {
        // onUpdateIsInvited(true);
        alert('네 링크타고 들어왔어요');
        // 네 링크타고 들어왔어요
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      });

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  };

  // const hasToken = props => {
  //   const {token} = props.token;
  //   if (!token) {
  //     return <SocialLogin />;
  //   }
  // };

  useEffect(() => {
    SplashScreen.hide();
    configDynamicLink();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocialLogin />
        <ApiTestComp />
      </PersistGate>
    </Provider>
  );
}

export default App;
