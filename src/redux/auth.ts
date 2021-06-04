// Declare Action type for typescript
const ADD_TOKEN = 'counter/ADD_TOKEN' as const;
const REMOVE_TOKEN = 'counter/REMOVE_TOKEN' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const addToken = (token: string): actionType => ({
  type: ADD_TOKEN,
  payload: token,
});
export const removeToken = (): actionType => ({type: REMOVE_TOKEN});

// Declare Reducers
type AuthAction = ReturnType<typeof addToken> | ReturnType<typeof removeToken>;

type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: '',
};

function auth(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case ADD_TOKEN:
      return {token: action.payload};
    case REMOVE_TOKEN:
      return {token: ''};
    default:
      return state;
  }
}

export default auth;
