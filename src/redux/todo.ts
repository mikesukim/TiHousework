// Declare Action type for typescript
const ADD_TODOITEM = 'todo/ADD_TODOITEM' as const;
const REMOVE_TODOITEM = 'todo/REMOVE_TODOITEM' as const;
const TOGGLE_TODODONE = 'todo/TOGGLE_TODODONE' as const;
const UPDATE_TITLE = 'todo/UPDATE_TITLE' as const;
const UPDATE_AFTERIMGURI = 'todo/UPDATE_AFTERIMGURI' as const;
const REMOVE_AFTERIMGURI = 'todo/REMOVE_AFTERIMGURI' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const addTodoItem = (
  todoItem: Array<{
    id: number;
    title: string;
    name: string;
    done: boolean;
    beforeImgUri: string;
    afterImgUri: string;
  }>,
): actionType => ({
  type: ADD_TODOITEM,
  payload: todoItem,
});
export const removeTodoItem = (id: number): actionType => ({
  type: REMOVE_TODOITEM,
  payload: id,
});
export const toggleTodoDone = (id: number): actionType => ({
  type: TOGGLE_TODODONE,
  payload: id,
});
export const updateTitle = (id: number, title: string): actionType => ({
  type: UPDATE_TITLE,
  payload: {id, title},
});
export const updateAfterImgUri = (
  id: number,
  afterImgUri: string,
): actionType => ({
  type: UPDATE_AFTERIMGURI,
  payload: {id, afterImgUri},
});
export const removeAfterImgUri = (
  id: number,
  afterImgUri: string,
): actionType => ({
  type: REMOVE_AFTERIMGURI,
  payload: {id, afterImgUri},
});

// Declare Reducers
type TodoAction =
  | ReturnType<typeof addTodoItem>
  | ReturnType<typeof removeTodoItem>
  | ReturnType<typeof toggleTodoDone>
  | ReturnType<typeof updateTitle>
  | ReturnType<typeof updateAfterImgUri>
  | ReturnType<typeof removeAfterImgUri>;

type TodoState = {
  todoItem: Array<{
    id: number;
    title: string;
    name: string;
    done: boolean;
    beforeImgUri: string;
    afterImgUri: string;
  }>;
};

const initialState: TodoState = {
  todoItem: [
    {
      id: 0,
      title: '설거지 하기',
      name: '지윤',
      done: false,
      beforeImgUri: '',
      afterImgUri: '',
    },
  ],
};

function todo(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODOITEM:
      return {...state, todoItem: state.todoItem.concat(action.payload)};
    case REMOVE_TODOITEM:
      return {
        ...state,
        todoItem: state.todoItem.filter(item => item.id !== action.payload),
      };
    case TOGGLE_TODODONE:
      return {
        ...state,
        todoItem: state.todoItem.map(item =>
          item.id === action.payload ? {...item, done: !item.done} : item,
        ),
      };
    case UPDATE_TITLE:
      return {
        ...state,
        todoItem: state.todoItem.map(item =>
          item.id === action.payload.id
            ? {...item, title: action.payload.title}
            : item,
        ),
      };
    case UPDATE_AFTERIMGURI:
      return {
        ...state,
        todoItem: state.todoItem.map(item =>
          item.id === action.payload.id
            ? {...item, afterImgUri: action.payload.afterImgUri}
            : item,
        ),
      };
    case REMOVE_AFTERIMGURI:
      return {
        ...state,
        todoItem: state.todoItem.map(item =>
          item.id === action.payload.id ? {...item, afterImgUri: ''} : item,
        ),
      };
    default:
      return state;
  }
}

export default todo;
