import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {
  updateIsSocialLoggedIn,
  updateIsLoginInProcess,
} from '../redux/maintenance.ts';

interface MaintenanceProps {
  isSocialLoggedIn: boolean;
  isLoginInProcess: boolean;
  onUpdateIsSocialLoggedIn: (isSocialLoggedIn: boolean) => void;
  onUpdateIsLoginInProcess: (isLoginInProcess: boolean) => void;
}

export default function useMaintenance(): MaintenanceProps {
  const isSocialLoggedIn = useSelector(
    (state: RootState) => state.maintenance.isSocialLoggedIn,
  );
  const isLoginInProcess = useSelector(
    (state: RootState) => state.maintenance.isLoginInProcess,
  );
  const dispatch = useDispatch();

  const onUpdateIsSocialLoggedIn = useCallback(
    (isSocialLoggedIn: boolean) =>
      dispatch(updateIsSocialLoggedIn(isSocialLoggedIn)),
    [dispatch],
  );
  const onUpdateIsLoginInProcess = useCallback(
    (isLoginInProcess: boolean) =>
      dispatch(updateIsLoginInProcess(isLoginInProcess)),
    [dispatch],
  );

  return {
    isSocialLoggedIn,
    isLoginInProcess,
    onUpdateIsSocialLoggedIn,
    onUpdateIsLoginInProcess,
  };
}
