import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {
  createUser,
  removeUser,
  updateEmail,
  removeEmail,
  updateRoomID,
  removeRoomID,
  updateIsInvited,
  removeIsInvited,
  updateInviterEmail,
  removeInviterEmail,
  UserState,
} from '../redux/user.ts';

interface UserProps {
  user: UserState;
  onCreate: (user: UserState) => void;
  onRemove: () => void;
}

export default function useUser(): UserProps {
  const user = useSelector((state: RootState) => state.user);
  const email = useSelector((state: RootState) => state.user.email);
  const roomID = useSelector((state: RootState) => state.user.roomID);
  const isInvited = useSelector((state: RootState) => state.user.isInvited);
  const inviterEmail = useSelector(
    (state: RootState) => state.user.inviterEmail,
  );

  const dispatch = useDispatch();
  const onCreateUser = useCallback(
    (user: UserState) => dispatch(createUser(user)),
    [dispatch],
  );
  const onRemoveUser = useCallback(() => dispatch(removeUser()), [dispatch]);
  const onUpdateEmail = useCallback(
    (email: string) => dispatch(updateEmail(email)),
    [dispatch],
  );
  const onRemoveEmail = useCallback(() => dispatch(removeEmail()), [dispatch]);
  const onUpdateRoomID = useCallback(
    (roomID: string) => dispatch(updateRoomID(roomID)),
    [dispatch],
  );
  const onRemoveRoomID = useCallback(() => dispatch(removeRoomID()), [dispatch]);
  const onUpdateIsInvited = useCallback(
    (isInvited: boolean) => dispatch(updateIsInvited(isInvited)),
    [dispatch],
  );
  const onRemoveIsInvited = useCallback(() => dispatch(removeIsInvited()), [dispatch]);
  const onUpdateInviterEmail = useCallback(
    (inviterEmail: string) => dispatch(updateInviterEmail(inviterEmail)),
    [dispatch],
  );
  const onRemoveInviterEmail = useCallback(
    () => dispatch(removeInviterEmail()),
    [dispatch],
  );

  return {
    user,
    email,
    roomID,
    isInvited,
    inviterEmail,
    onCreateUser,
    onRemoveUser,
    onUpdateEmail,
    onRemoveEmail,
    onUpdateRoomID,
    onRemoveRoomID,
    onUpdateIsInvited,
    onRemoveIsInvited,
    onUpdateInviterEmail,
    onRemoveInviterEmail,
  };
}
