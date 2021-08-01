// Declare Action type for typescript
const CREATE_TODO = 'todo/CREATE_TODO' as const;
const REMOVE_TODO = 'todo/REMOVE_TODO' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const createTodo = (todo: TodoState): actionType => ({
  type: CREATE_TODO,
  payload: todo,
});
export const removeTodo = (): actionType => ({type: REMOVE_TODO});

// Declare Reducers
type TodoAction = ReturnType<typeof createTodo> | ReturnType<typeof removeTodo>;

export type Todo = {
  id: number;
  title: string;
  name: string;
  done: boolean;
};
type TodoState = Todo[];

const initialState: TodoState = [
  {
    id: 1,
    title: '설거지 하기',
    name: '지윤',
    done: false,
  },
];

function todo(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat({
        id: Math.max(...state.map(todo => todo.id)) + 1,
        title: action.payload.title,
        name: action.payload.name,
        done: action.payload.done,
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todo;
