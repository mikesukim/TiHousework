import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {updateIsSocialLoggedIn} from '../redux/maintenance.ts';

interface MaintenanceProps {
  isSocialLoggedIn: boolean;
  onUpdateIsSocialLoggedIn: (isSocialLoggedIn: boolean) => void;
}

export default function useMaintenance(): MaintenanceProps {
  const isSocialLoggedIn = useSelector(
    (state: RootState) => state.maintenance.isSocialLoggedIn,
  );
  const dispatch = useDispatch();

  const onUpdateIsSocialLoggedIn = useCallback(
    (isSocialLoggedIn: boolean) =>
      dispatch(updateIsSocialLoggedIn(isSocialLoggedIn)),
    [dispatch],
  );

  return {
    isSocialLoggedIn,
    onUpdateIsSocialLoggedIn,
  };
}
