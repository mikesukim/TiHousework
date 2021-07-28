import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {
  updateClickedUserId,
  removeClickedUserId,
  updateClickedUserName,
  removeClickedUserName,
} from '../redux/view.ts';

interface ViewProps {
  clickedUserId: string;
  clickedUserName: string;
  onUpdateClickedUserId: (clickedUserId: string) => void;
  onRemoveClickedUserId: () => void;
  onUpdateClickedUserName: (clickedUserName: string) => void;
  onRemoveClickedUserName: () => void;
}

export default function useView(): ViewProps {
  const clickedUserId = useSelector(
    (state: RootState) => state.view.clickedUserId,
  );
  const clickedUserName = useSelector(
    (state: RootState) => state.view.clickedUserName,
  );

  const dispatch = useDispatch();

  const onUpdateClickedUserId = useCallback(
    (clickedUserId: string) => dispatch(updateClickedUserId(clickedUserId)),
    [dispatch],
  );
  const onRemoveClickedUserId = useCallback(
    () => dispatch(removeClickedUserId()),
    [dispatch],
  );
  const onUpdateClickedUserName = useCallback(
    (clickedUserName: string) =>
      dispatch(updateClickedUserName(clickedUserName)),
    [dispatch],
  );
  const onRemoveClickedUserName = useCallback(
    () => dispatch(removeClickedUserName()),
    [dispatch],
  );

  return {
    clickedUserId,
    clickedUserName,
    onUpdateClickedUserId,
    onRemoveClickedUserId,
    onUpdateClickedUserName,
    onRemoveClickedUserName,
  };
}
