import * as React from 'react';
import { useGetUsersQuery } from 'store/users/api';
import * as Styled from './UserList.styled';

const UserList = () => {
  const {
    data: userList,
    error,
    isLoading,
    refetch,
  } = useGetUsersQuery(undefined, {
    // refetchOnFocus: isActiveFocus,
    // refetchOnMountOrArgChange: 5
  });

  if (!userList) {
    return null;
  }

  return (
    <Styled.Wrapper>
      {
        <ul>
          {userList.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      }
    </Styled.Wrapper>
  );
};

export default UserList;
