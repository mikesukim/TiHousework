// Declare Action type for typescript
const UPDATE_CLICKEDUSERID = 'view/UPDATE_CLICKEDUSERID' as const;
const REMOVE_CLICKEDUSERID = 'view/REMOVE_CLICKEDUSERID' as const;

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

// Declare Reducers
type ViewAction =
  | ReturnType<typeof updateClickedUserId>
  | ReturnType<typeof removeClickedUserId>;

type ViewState = {
  clickedUserId: string;
};

const initialState: ViewState = {
  clickedUserId: '',
};

function view(state: ViewState = initialState, action: ViewAction): ViewState {
  switch (action.type) {
    case UPDATE_CLICKEDUSERID:
      return {clickedUserId: action.payload};
    case REMOVE_CLICKEDUSERID:
      return {clickedUserId: ''};
    default:
      return state;
  }
}

export default view;
