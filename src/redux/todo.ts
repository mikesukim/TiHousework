// Declare Action type for typescript
const ADD_TODOITEM = 'todo/ADD_TODOITEM' as const;
const REMOVE_TODOITEM = 'todo/REMOVE_TODOITEM' as const;
const TOGGLE_TODODONE = 'todo/TOGGLE_TODODONE' as const;

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
export const toggleTodoDone = (id: number): actionType => ({
  type: TOGGLE_TODODONE,
  payload: id,
});

// Declare Reducers
type TodoAction =
  | ReturnType<typeof addTodoItem>
  | ReturnType<typeof removeTodoItem>
  | ReturnType<typeof toggleTodoDone>;

type TodoState = {
  todoItem: Array<{id: number; title: string; name: string; done: boolean}>;
};

const initialState: TodoState = {
  todoItem: [{id: 0, title: '설거지 하기', name: '지윤', done: false}],
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
    default:
      return state;
  }
}

export default todo;