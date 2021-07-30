import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {
  updateClickedUserId,
  removeClickedUserId,
  updateClickedUserName,
  removeClickedUserName,
  updateCameraOn,
  removeCameraOn,
} from '../redux/view.ts';

interface ViewProps {
  clickedUserId: string;
  clickedUserName: string;
  cameraOn: boolean;
  onUpdateClickedUserId: (clickedUserId: string) => void;
  onRemoveClickedUserId: () => void;
  onUpdateClickedUserName: (clickedUserName: string) => void;
  onRemoveClickedUserName: () => void;
  onUpdateCameraOn: (cameraOn: boolean) => void;
  onRemoveCameraOn: () => void;
}

export default function useView(): ViewProps {
  const clickedUserId = useSelector(
    (state: RootState) => state.view.clickedUserId,
  );
  const clickedUserName = useSelector(
    (state: RootState) => state.view.clickedUserName,
  );
  const cameraOn = useSelector((state: RootState) => state.view.cameraOn);

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
  const onUpdateCameraOn = useCallback(
    (cameraOn: boolean) => dispatch(updateCameraOn(cameraOn)),
    [dispatch],
  );
  const onRemoveCameraOn = useCallback(() => dispatch(removeCameraOn()), [
    dispatch,
  ]);

  return {
    clickedUserId,
    clickedUserName,
    cameraOn,
    onUpdateClickedUserId,
    onRemoveClickedUserId,
    onUpdateClickedUserName,
    onRemoveClickedUserName,
    onUpdateCameraOn,
    onRemoveCameraOn,
  };
}
