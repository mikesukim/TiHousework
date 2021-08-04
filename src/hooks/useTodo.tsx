import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {
  addTodoItem,
  removeTodoItem,
  toggleTodoDone,
  updateTitle,
  updateAfterImgUri,
  removeAfterImgUri,
} from '../redux/todo.ts';

interface TodoProps {
  todoItem: Array<{
    id: number;
    title: string;
    name: string;
    done: boolean;
    beforeImgUri: string;
    afterImgUri: string;
  }>;
  onAddTodoItem: (
    todoItem: Array<{
      id: number;
      title: string;
      name: string;
      done: boolean;
      beforeImgUri: string;
      afterImgUri: string;
    }>,
  ) => void;
  onRemoveTodoItem: (id: number) => void;
  onToggleTodoDone: (id: number) => void;
  onUpdateTitle: (id: number, title: string) => void;
  onUpdateAfterImgUri: (id: number, afterImgUri: string) => void;
  onRemoveAfterImgUri: (id: number, afterImgUri: string) => void;
}

export default function useTodo(): TodoProps {
  const todoItem = useSelector((state: RootState) => state.todo.todoItem);

  const dispatch = useDispatch();

  const onAddTodoItem = useCallback(
    (
      todoItem: Array<{
        id: number;
        title: string;
        name: string;
        done: boolean;
        beforeImgUri: string;
        afterImgUri: string;
      }>,
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
  const onUpdateTitle = useCallback(
    (id: number, title: string) => dispatch(updateTitle(id, title)),
    [dispatch],
  );
  const onUpdateAfterImgUri = useCallback(
    (id: number, afterImgUri: string) =>
      dispatch(updateAfterImgUri(id, afterImgUri)),
    [dispatch],
  );
  const onRemoveAfterImgUri = useCallback(
    (id: number, afterImgUri: string) =>
      dispatch(removeAfterImgUri(id, afterImgUri)),
    [dispatch],
  );

  return {
    todoItem,
    onAddTodoItem,
    onRemoveTodoItem,
    onToggleTodoDone,
    onUpdateTitle,
    onUpdateAfterImgUri,
    onRemoveAfterImgUri,
  };
}
