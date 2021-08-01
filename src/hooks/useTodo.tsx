import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {addTodoItem, removeTodoItem, toggleTodoDone} from '../redux/todo.ts';

interface TodoProps {
  todoItem: Array<{id: number; title: string; name: string; done: boolean}>;
  onAddTodoItem: (
    todoItem: Array<{id: number; title: string; name: string; done: boolean}>,
  ) => void;
  onRemoveTodoItem: (id: number) => void;
  onToggleTodoDone: (id: number) => void;
}

export default function useTodo(): TodoProps {
  const todoItem = useSelector((state: RootState) => state.todo.todoItem);

  const dispatch = useDispatch();

  const onAddTodoItem = useCallback(
    (
      todoItem: Array<{id: number; title: string; name: string; done: boolean}>,
    ) => dispatch(addTodoItem(todoItem)),
    [dispatch],
  );
  const onRemoveTodoItem = useCallback(
    (id: number) => dispatch(removeTodoItem(id)),
    [dispatch],
  );
  const onToggleTodoDone = useCallback(
    (id: number) => dispatch(toggleTodoDone(id)),
    [dispatch],
  );

  return {
    todoItem,
    onAddTodoItem,
    onRemoveTodoItem,
    onToggleTodoDone,
  };
}
