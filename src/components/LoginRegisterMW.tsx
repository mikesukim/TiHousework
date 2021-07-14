import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {postLogin, postRegister} from '../router';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth';
import useMaintenance from '../hooks/useMaintenance';

function LoginRegisterMW(): JSX.Element {
  const {isSocialLoggedIn, onUpdateIsLoginInProcess} = useMaintenance();
  const {onAddToken} = useAuth();
  const {email} = useUser();

  function requestLoginApi() {
    postLogin(email)
      // when succeed login to our app
      .then(function (response) {
        onUpdateIsLoginInProcess(false);
        onAddToken(response.data.token);
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
                  onUpdateIsLoginInProcess(false);
                  onAddToken(r.data.token);
                })
                .catch(function (e) {
                  onUpdateIsLoginInProcess(false);
                  Alert.alert('로그인 실패. 다시 시도해주세요');
                });
            })
            .catch(function (e) {
              onUpdateIsLoginInProcess(false);
              console.log(e.response.data);
              Alert.alert('로그인 실패. 다시 시도해주세요');
            });
        } else {
          onUpdateIsLoginInProcess(false);
          Alert.alert('로그인 실패. 다시 시도해주세요');
        }
      });
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (isSocialLoggedIn) {
        // Login Register MW
        onUpdateIsLoginInProcess(true);
        requestLoginApi();
      }
    }
    return () => {
      isMounted = false;
    };
  }, [isSocialLoggedIn]);

  return <></>;
}

export default LoginRegisterMW;
