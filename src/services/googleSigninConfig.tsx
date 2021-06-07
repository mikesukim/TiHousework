import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function configureGoogleLogin(): void {
  GoogleSignin.configure({
    scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
    androidClientId:
      '1037600109526-j6rvmqkp5i87gjig651tn2oq2dmeqh7a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    iosClientId:
      '1037600109526-ubqj42har7qe8gmm1dta4mneerhk3okm.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      
  });
}
