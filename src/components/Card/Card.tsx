import * as React from 'react';
import { userListSelector, fetchUserList } from 'store/slices/usersSlice';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import * as Styled from './Card.styled';

const UserList: React.FC = () => {
  const userList = useAppSelector(userListSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(fetchUserList());

  return (
    <Styled.Wrapper>
      <Styled.Img src="/public/img/img.png" />
      <Styled.Background src="/public/img/img.png" />

      <button type="button" onClick={handleClick}>
        GET USER LIST
      </button>

      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Styled.Wrapper>
  );
};

export default UserList;
