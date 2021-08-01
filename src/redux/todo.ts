// Declare Action type for typescript
const ADD_TODOITEM = 'todo/ADD_TODOITEM' as const;
const REMOVE_TODOITEM = 'todo/REMOVE_TODOITEM' as const;
const UPDATE_ISTODODONE = 'todo/UPDATE_ISTODODONE' as const;
const REMOVE_ISTODODONE = 'todo/REMOVE_ISTODODONE' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const addTodoItem = (
  todoItem: Array<{id: number; title: string; name: string; done: boolean}>,
): actionType => ({
  type: ADD_TODOITEM,
  payload: todoItem,
});
export const removeTodoItem = (id: number): actionType => ({
  type: REMOVE_TODOITEM,
  payload: id,
});
export const updateIsTodoDone = (isTodoDone: boolean): actionType => ({
  type: UPDATE_ISTODODONE,
  payload: isTodoDone,
});
export const removeIsTodoDone = (): actionType => ({
  type: REMOVE_ISTODODONE,
});

// Declare Reducers
type TodoAction =
  | ReturnType<typeof addTodoItem>
  | ReturnType<typeof removeTodoItem>
  | ReturnType<typeof updateIsTodoDone>
  | ReturnType<typeof removeIsTodoDone>;

type TodoState = {
  todoItem: Array<{id: number; title: string; name: string; done: boolean}>;
  isTodoDone: boolean;
};

const initialState: TodoState = {
  todoItem: [
    {id: Math.random(), title: '설거지 하기', name: '지윤', done: false},
  ],
  isTodoDone: false,
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
    case UPDATE_ISTODODONE:
      return {...state, isTodoDone: action.payload};
    case REMOVE_ISTODODONE:
      return {...state, isTodoDone: false};
    default:
      return state;
  }
}

export default todo;
