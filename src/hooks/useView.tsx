import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {updateIsProfileClicked, removeIsProfileClicked} from '../redux/view.ts';

interface ViewProps {
  isProfileClicked: boolean;
  onUpdateIsProfileClicked: (isProfileClicked: boolean) => void;
  onRemoveIsProfileClicked: () => void;
}

export default function useView(): ViewProps {
  const isProfileClicked = useSelector(
    (state: RootState) => state.view.isProfileClicked,
  );

  const dispatch = useDispatch();

  const onUpdateIsProfileClicked = useCallback(
    (isProfileClicked: boolean) =>
      dispatch(updateIsProfileClicked(isProfileClicked)),
    [dispatch],
  );
  const onRemoveIsProfileClicked = useCallback(
    () => dispatch(removeIsProfileClicked()),
    [dispatch],
  );

  return {
    isProfileClicked,
    onUpdateIsProfileClicked,
    onRemoveIsProfileClicked,
  };
}
