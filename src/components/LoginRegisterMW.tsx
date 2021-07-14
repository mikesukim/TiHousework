import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import {postLogin, postRegister} from '../router';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import Loading from './Loading';
import LaunchScreen from '../screens/LaunchScreen';

function LoginRegisterMW(): JSX.Element {
  const [isLoginSucceeded, setIsLoginSucceeded] = useState(false);
  const [isLoginInProcess, setIsLoginInProcess] = useState(false);
  const {onAddToken} = useAuth();
  const {email} = useUser();

  function requestLoginApi() {
    postLogin(email)
      // when succeed login to our app
      .then(function (response) {
        onAddToken(response.data.token);
        setIsLoginSucceeded(true);
        setIsLoginInProcess(false);
      })
      .catch(function (error) {
        // when a user has never been logged in to our app before
        if (
          error.response.status == 400 &&
          error.response.data == 'no id exist'
        ) {
          postRegister(email)
            // when succeed registering to our app
            .then(function () {
              postLogin(email)
                // when succeed login to our app after registration
                .then(function (r) {
                  onAddToken(r.data.token);
                  setIsLoginSucceeded(true);
                  setIsLoginInProcess(false);
                })
                .catch(function (e) {
                  Alert.alert('로그인 실패. 다시 시도해주세요');
                  setIsLoginInProcess(false);
                });
            })
            .catch(function (e) {
              console.log(e.response.data);
              Alert.alert('로그인 실패. 다시 시도해주세요');
              setIsLoginInProcess(false);
            });
        } else {
          Alert.alert('로그인 실패. 다시 시도해주세요');
          setIsLoginInProcess(false);
        }
      });
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      // Login Register MW
      setIsLoginInProcess(true);
      requestLoginApi();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoginSucceeded) {
    return <RoomCheckToScreenMW />;
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        }}>
        <ActivityIndicator size="large" />
      </View>
    </>
  );
}

export default LoginRegisterMW;
