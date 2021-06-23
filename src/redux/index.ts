import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import counter from './counter.ts';
import auth from './auth.ts';
import user from './user.ts';
import maintenance from './maintenance.ts';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage: AsyncStorage,
  // reducer들중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['auth', 'user'],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({ 
  counter,
  auth,
  user,
  maintenance,
});

// 루트 리듀서를 내보내주세요.
// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트 / 후크에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
