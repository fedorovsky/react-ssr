import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import * as usersModule from 'store/users';
import * as Styled from './UserList.styled';

const UserList = () => {
  const userList = useAppSelector(usersModule.selectors.userListSelector);
  const status = useAppSelector(usersModule.selectors.statusSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(usersModule.thunkActions.fetchUserList());

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
