import React from 'react';
import useView from '../hooks/useView';
import TodoList from './TodoList';

function ClickedMemberTodoView(): JSX.Element {
  const {clickedUserName} = useView();
  return <>{clickedUserName ? <TodoList /> : null}</>;
}

export default ClickedMemberTodoView;
