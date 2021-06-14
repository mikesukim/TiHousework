import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {create, remove, UserState} from '../redux/user.ts';

interface UserProps {
  user: UserState;
  onCreate: (user: UserState) => void;
  onRemove: () => void;
}

export default function useAuth(): UserProps {
  const email = useSelector((state: RootState) => state.user.email);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onCreate = useCallback((user: UserState) => dispatch(create(user)), [
    dispatch,
  ]);

  const onRemove = useCallback(() => dispatch(remove()), [dispatch]);

  return {
    email,
    user,
    onCreate,
    onRemove,
  };
}
