import React from 'react';
import useView from '../hooks/useView';
import TodoList from './TodoList';

function ClickedMemberTodoView(): JSX.Element {
  const {clickedUserId} = useView();
  return <>{clickedUserId === '2' ? <TodoList /> : null}</>;
}

export default ClickedMemberTodoView;
