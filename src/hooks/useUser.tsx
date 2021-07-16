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
  updateIsSender,
  removeIsSender,
  updateSenderEmail,
  removeSenderEmail,
  UserState,
} from '../redux/user.ts';

interface UserProps {
  user: UserState;
  email: string;
  roomID: string;
  isInvited: boolean;
  isSender: boolean;
  senderEmail: string;
  onCreateUser: (user: UserState) => void;
  onRemoveUser: () => void;
  onUpdateEmail: (email: string) => void;
  onRemoveEmail: () => void;
  onUpdateRoomID: (roomID: string) => void;
  onRemoveRoomID: () => void;
  onUpdateIsInvited: (isInvited: boolean) => void;
  onRemoveIsInvited: () => void;
  onUpdateIsSender: (isSender: boolean) => void;
  onRemoveIsSender: () => void;
  onUpdateSenderEmail: (senderEmail: string) => void;
  onRemoveSenderEmail: () => void;
}

export default function useUser(): UserProps {
  const user = useSelector((state: RootState) => state.user);
  const email = useSelector((state: RootState) => state.user.email);
  const roomID = useSelector((state: RootState) => state.user.roomID);
  const isInvited = useSelector((state: RootState) => state.user.isInvited);
  const isSender = useSelector((state: RootState) => state.user.isSender);
  const senderEmail = useSelector((state: RootState) => state.user.senderEmail);

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
  const onRemoveRoomID = useCallback(() => dispatch(removeRoomID()), [
    dispatch,
  ]);
  const onUpdateIsInvited = useCallback(
    (isInvited: boolean) => dispatch(updateIsInvited(isInvited)),
    [dispatch],
  );
  const onRemoveIsInvited = useCallback(() => dispatch(removeIsInvited()), [
    dispatch,
  ]);
  const onUpdateIsSender = useCallback(
    (isSender: boolean) => dispatch(updateIsSender(isSender)),
    [dispatch],
  );
  const onRemoveIsSender = useCallback(() => dispatch(removeIsSender()), [
    dispatch,
  ]);
  const onUpdateSenderEmail = useCallback(
    (senderEmail: string) => dispatch(updateSenderEmail(senderEmail)),
    [dispatch],
  );
  const onRemoveSenderEmail = useCallback(() => dispatch(removeSenderEmail()), [
    dispatch,
  ]);

  return {
    user,
    email,
    roomID,
    isInvited,
    isSender,
    senderEmail,
    onCreateUser,
    onRemoveUser,
    onUpdateEmail,
    onRemoveEmail,
    onUpdateRoomID,
    onRemoveRoomID,
    onUpdateIsInvited,
    onRemoveIsInvited,
    onUpdateIsSender,
    onRemoveIsSender,
    onUpdateSenderEmail,
    onRemoveSenderEmail,
  };
}
