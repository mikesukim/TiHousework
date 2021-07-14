// Declare Action type for typescript
const UPDATE_ISSOCIALLOGGEDIN = 'maintanence/UPDATE_ISSOCIALLOGGEDIN' as const;
const UPDATE_ISLOGININPROCESS = 'maintanence/UPDATE_ISLOGININPROCESS' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const updateIsSocialLoggedIn = (isLoggedIn: boolean): actionType => ({
  type: UPDATE_ISSOCIALLOGGEDIN,
  payload: isLoggedIn,
});
export const updateIsLoginInProcess = (isInProcess: boolean): actionType => ({
  type: UPDATE_ISLOGININPROCESS,
  payload: isInProcess,
});

// Declare Reducers
type MaintenanceAction =
  | ReturnType<typeof updateIsSocialLoggedIn>
  | ReturnType<typeof updateIsLoginInProcess>;

type MaintenanceState = {
  isSocialLoggedIn: boolean;
  isLoginInProcess: boolean;
};

const initialState: MaintenanceState = {
  isSocialLoggedIn: false,
  isLoginInProcess: false,
};

function maintenance(
  state: MaintenanceState = initialState,
  action: MaintenanceAction,
): MaintenanceState {
  switch (action.type) {
    case UPDATE_ISSOCIALLOGGEDIN:
      return {isSocialLoggedIn: action.payload};
    case UPDATE_ISLOGININPROCESS:
      return {isLoginInProcess: action.payload};
    default:
      return state;
  }
}

export default maintenance;
