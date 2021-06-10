// Declare Action type for typescript
const CREATE = 'user/CREATE' as const;
const REMOVE = 'user/REMOVE' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const create = (user: UserState): actionType => ({
  type: CREATE,
  payload: user,
});
export const remove = (): actionType => ({type: REMOVE});

// Declare Reducers
type UserAction = ReturnType<typeof create> | ReturnType<typeof remove>;

export type UserState = {
  email: string;
};

const initialState: UserState = {
  email: '',
};

function user(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case CREATE:
      return {email: action.payload.email};
    case REMOVE:
      return {email: ''};
    default:
      return state;
  }
}

export default user;
