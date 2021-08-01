import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {
  addTodoItem,
  removeTodoItem,
  updateIsTodoDone,
  removeIsTodoDone,
} from '../redux/todo.ts';

interface TodoProps {
  todoItem: Array<{id: number; title: string; name: string; done: boolean}>;
  isTodoDone: boolean;
  onAddTodoItem: (
    todoItem: Array<{id: number; title: string; name: string; done: boolean}>,
  ) => void;
  onRemoveTodoItem: (id: number) => void;
  onUpdateIsTodoDone: (isTodoDone: boolean) => void;
  onRemoveIsTodoDone: () => void;
}

export default function useTodo(): TodoProps {
  const todoItem = useSelector((state: RootState) => state.todo.todoItem);
  const isTodoDone = useSelector((state: RootState) => state.todo.isTodoDone);

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
  const onUpdateIsTodoDone = useCallback(
    (isTodoDone: boolean) => dispatch(updateIsTodoDone(isTodoDone)),
    [dispatch],
  );
  const onRemoveIsTodoDone = useCallback(() => dispatch(removeIsTodoDone()), [
    dispatch,
  ]);

  return {
    todoItem,
    isTodoDone,
    onAddTodoItem,
    onRemoveTodoItem,
    onUpdateIsTodoDone,
    onRemoveIsTodoDone,
  };
}
