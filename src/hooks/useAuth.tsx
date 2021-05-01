import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {addToken, removeToken} from '../redux/auth.ts';

interface AuthProps {
  token: string;
  onAddToken: (token: string) => void;
  onRemoveToken: () => void;
}

export default function useAuth(): AuthProps {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const onAddToken = useCallback((token: string) => dispatch(addToken(token)), [
    dispatch,
  ]);

  const onRemoveToken = useCallback(() => dispatch(removeToken()), [dispatch]);

  return {
    token,
    onAddToken,
    onRemoveToken,
  };
}
