// Declare Action type for typescript
const UPDATE_CLICKEDUSERID = 'view/UPDATE_CLICKEDUSERID' as const;
const REMOVE_CLICKEDUSERID = 'view/REMOVE_CLICKEDUSERID' as const;
const UPDATE_CLICKEDUSERNAME = 'view/UPDATE_CLICKEDUSERNAME' as const;
const REMOVE_CLICKEDUSERNAME = 'view/REMOVE_CLICKEDUSERNAME' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const updateClickedUserId = (clickedUserId: string): actionType => ({
  type: UPDATE_CLICKEDUSERID,
  payload: clickedUserId,
});
export const removeClickedUserId = (): actionType => ({
  type: REMOVE_CLICKEDUSERID,
});
export const updateClickedUserName = (clickedUserName: string): actionType => ({
  type: UPDATE_CLICKEDUSERNAME,
  payload: clickedUserName,
});
export const removeClickedUserName = (): actionType => ({
  type: REMOVE_CLICKEDUSERNAME,
});

// Declare Reducers
type ViewAction =
  | ReturnType<typeof updateClickedUserId>
  | ReturnType<typeof removeClickedUserId>
  | ReturnType<typeof updateClickedUserName>
  | ReturnType<typeof removeClickedUserName>;

type ViewState = {
  clickedUserId: string;
  clickedUserName: string;
};

const initialState: ViewState = {
  clickedUserId: '',
  clickedUserName: '',
};

function view(state: ViewState = initialState, action: ViewAction): ViewState {
  switch (action.type) {
    case UPDATE_CLICKEDUSERID:
      return {...state, clickedUserId: action.payload};
    case REMOVE_CLICKEDUSERID:
      return {...state, clickedUserId: ''};
    case UPDATE_CLICKEDUSERNAME:
      return {...state, clickedUserName: action.payload};
    case REMOVE_CLICKEDUSERNAME:
      return {...state, clickedUserName: ''};
    default:
      return state;
  }
}

export default view;
