// Declare Action type for typescript
const UPDATE_ISPROFILECLICKED = 'view/UPDATE_ISPROFILECLICKED' as const;
const REMOVE_ISPROFILECLICKED = 'view/REMOVE_ISPROFILECLICKED' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const updateIsProfileClicked = (
  isProfileClicked: boolean,
): actionType => ({
  type: UPDATE_ISPROFILECLICKED,
  payload: isProfileClicked,
});
export const removeIsProfileClicked = (): actionType => ({
  type: REMOVE_ISPROFILECLICKED,
});

// Declare Reducers
type ViewAction =
  | ReturnType<typeof updateIsProfileClicked>
  | ReturnType<typeof removeIsProfileClicked>;

type ViewState = {
  isProfileClicked: boolean;
};

const initialState: ViewState = {
  isProfileClicked: false,
};

function view(state: ViewState = initialState, action: ViewAction): ViewState {
  switch (action.type) {
    case UPDATE_ISPROFILECLICKED:
      return {isProfileClicked: action.payload};
    case REMOVE_ISPROFILECLICKED:
      return {isProfileClicked: false};
    default:
      return state;
  }
}

export default view;
