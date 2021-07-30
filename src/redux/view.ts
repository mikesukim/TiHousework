// Declare Action type for typescript
const UPDATE_CLICKEDUSERID = 'view/UPDATE_CLICKEDUSERID' as const;
const REMOVE_CLICKEDUSERID = 'view/REMOVE_CLICKEDUSERID' as const;
const UPDATE_CLICKEDUSERNAME = 'view/UPDATE_CLICKEDUSERNAME' as const;
const REMOVE_CLICKEDUSERNAME = 'view/REMOVE_CLICKEDUSERNAME' as const;
const UPDATE_CAMERAON = 'view/UPDATE_CAMERAON' as const;
const REMOVE_CAMERAON = 'view/REMOVE_CAMERAON' as const;

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
export const updateCameraOn = (cameraOn: boolean): actionType => ({
  type: UPDATE_CAMERAON,
  payload: cameraOn,
});
export const removeCameraOn = (): actionType => ({
  type: REMOVE_CAMERAON,
});

// Declare Reducers
type ViewAction =
  | ReturnType<typeof updateClickedUserId>
  | ReturnType<typeof removeClickedUserId>
  | ReturnType<typeof updateClickedUserName>
  | ReturnType<typeof removeClickedUserName>
  | ReturnType<typeof updateCameraOn>
  | ReturnType<typeof removeCameraOn>;

type ViewState = {
  clickedUserId: string;
  clickedUserName: string;
  cameraOn: boolean;
};

const initialState: ViewState = {
  clickedUserId: '',
  clickedUserName: '',
  cameraOn: false,
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
    case UPDATE_CAMERAON:
      return {...state, cameraOn: action.payload};
    case REMOVE_CAMERAON:
      return {...state, cameraOn: false};
    default:
      return state;
  }
}

export default view;
