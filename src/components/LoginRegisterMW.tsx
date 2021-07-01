import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {postLogin, postRegister} from '../router';
import useUser from '../hooks/useUser.tsx';
import useAuth from '../hooks/useAuth';
import RoomCheckToScreenMW from './RoomCheckToScreenMW';
import SocialLogin from './SocialLogin';

function LoginRegisterMW(): JSX.Element {
  const [isLoginSucceeded, setIsLoginSucceeded] = useState(false);
  const {token, onAddToken} = useAuth();
  const {email} = useUser();

  function requestLoginApi() {
    postLogin(email)
      .then(function (response) {
        onAddToken(response.data.token);
        setIsLoginSucceeded(true);
        console.log('우리 앱 로그인 일단 성공');
      })
      .catch(function (error) {
        if (
          error.response.status == 400 &&
          error.response.data == 'no id exist'
        ) {
          console.log('No id exist');
          postRegister(email)
            .then(function () {
              console.log('register 성공');
              postLogin(email)
                .then(function (r) {
                  onAddToken(r.data.token);
                  setIsLoginSucceeded(true);
                  console.log('우리 앱 로그인 일단 성공');
                })
                .catch(function (e) {
                  Alert.alert('로그인 실패. 다시 시도해주세요');
                });
            })
            .catch(function (e) {
              console.log(e.response.data);
              Alert.alert('로그인 실패. 다시 시도해주세요');
            });
        } else {
          console.log('Error');
          Alert.alert('로그인 실패. 다시 시도해주세요');
        }
      });
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      console.log('지금 login register MW 입니다');
      requestLoginApi();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoginSucceeded) {
    return <RoomCheckToScreenMW />;
  }
  return <SocialLogin />;
}

export default LoginRegisterMW;
