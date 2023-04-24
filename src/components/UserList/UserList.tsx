import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import {
  fetchUserList,
  userListSelector,
  statusSelector,
} from 'store/users/slice';
import * as Styled from './UserList.styled';

const UserList = () => {
  const userList = useAppSelector(userListSelector);
  const status = useAppSelector(statusSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(fetchUserList());

  return (
    <Styled.Wrapper>
      <button type="button" onClick={handleClick}>
        GET USER LIST
      </button>
      {status === 'loading' && <div>Loading</div>}
      {status === 'failed' && <div>Error</div>}
      {status === 'succeeded' && (
        <ul>
          {userList.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </Styled.Wrapper>
  );
};

export default UserList;
