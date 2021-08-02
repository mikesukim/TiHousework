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
  updateIsBefore,
  removeIsBefore,
  updateIsAddBtnClicked,
  removeIsAddBtnClicked,
} from '../redux/view.ts';

interface ViewProps {
  clickedUserId: string;
  clickedUserName: string;
  cameraOn: boolean;
  isBefore: boolean;
  isAddBtnClicked: boolean;
  onUpdateClickedUserId: (clickedUserId: string) => void;
  onRemoveClickedUserId: () => void;
  onUpdateClickedUserName: (clickedUserName: string) => void;
  onRemoveClickedUserName: () => void;
  onUpdateCameraOn: (cameraOn: boolean) => void;
  onRemoveCameraOn: () => void;
  onUpdateIsBefore: (isBefore: boolean) => void;
  onRemoveIsBefore: () => void;
  onUpdateIsAddBtnClicked: (isAddBtnClicked: boolean) => void;
  onRemoveIsAddBtnClicked: () => void;
}

export default function useView(): ViewProps {
  const clickedUserId = useSelector(
    (state: RootState) => state.view.clickedUserId,
  );
  const clickedUserName = useSelector(
    (state: RootState) => state.view.clickedUserName,
  );
  const cameraOn = useSelector((state: RootState) => state.view.cameraOn);
  const isBefore = useSelector((state: RootState) => state.view.isBefore);
  const isAddBtnClicked = useSelector(
    (state: RootState) => state.view.isAddBtnClicked,
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
  const onUpdateCameraOn = useCallback(
    (cameraOn: boolean) => dispatch(updateCameraOn(cameraOn)),
    [dispatch],
  );
  const onRemoveCameraOn = useCallback(() => dispatch(removeCameraOn()), [
    dispatch,
  ]);
  const onUpdateIsBefore = useCallback(
    (isBefore: boolean) => dispatch(updateIsBefore(isBefore)),
    [dispatch],
  );
  const onRemoveIsBefore = useCallback(() => dispatch(removeIsBefore()), [
    dispatch,
  ]);
  const onUpdateIsAddBtnClicked = useCallback(
    (isAddBtnClicked: boolean) =>
      dispatch(updateIsAddBtnClicked(isAddBtnClicked)),
    [dispatch],
  );
  const onRemoveIsAddBtnClicked = useCallback(
    () => dispatch(removeIsAddBtnClicked()),
    [dispatch],
  );

  return {
    clickedUserId,
    clickedUserName,
    cameraOn,
    isBefore,
    isAddBtnClicked,
    onUpdateClickedUserId,
    onRemoveClickedUserId,
    onUpdateClickedUserName,
    onRemoveClickedUserName,
    onUpdateCameraOn,
    onRemoveCameraOn,
    onUpdateIsBefore,
    onRemoveIsBefore,
    onUpdateIsAddBtnClicked,
    onRemoveIsAddBtnClicked,
  };
}
