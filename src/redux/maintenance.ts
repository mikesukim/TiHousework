// Declare Action type for typescript
const UPDATE_ISSOCIALLOGGEDIN = 'maintanence/UPDATE_ISSOCIALLOGGEDIN' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const updateIsSocialLoggedIn = (isLoggedIn: boolean): actionType => ({
  type: UPDATE_ISSOCIALLOGGEDIN,
  payload: isLoggedIn,
});

// Declare Reducers
type MaintenanceAction = ReturnType<typeof updateIsSocialLoggedIn>;

type MaintenanceState = {
  isSocialLoggedIn: boolean;
};

const initialState: MaintenanceState = {
  isSocialLoggedIn: false,
};

function maintenance(
  state: MaintenanceState = initialState,
  action: MaintenanceAction,
): MaintenanceState {
  switch (action.type) {
    case UPDATE_ISSOCIALLOGGEDIN:
      return {isSocialLoggedIn: action.payload};
    default:
      return state;
  }
}

export default maintenance;
