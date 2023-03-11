import * as React from 'react';
import { userListSelector, fetchUserList } from 'store/slices/usersSlice';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import * as Styled from './Card.styled';

const LazyComponent = React.lazy(
  () => import('components/LazyComponent'),
);

const UserList: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const userList = useAppSelector(userListSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(fetchUserList());
  const handleShow = () => setVisible(true);

  return (
    <Styled.Wrapper>
      <Styled.Img src="/public/img/img.png" />
      <Styled.Background src="/public/img/img.png" />

      <button type="button" onClick={handleClick}>
        GET USER LIST
      </button>

      <button type="button" onClick={handleShow}>
        Show
      </button>

      {isVisible && (
        <React.Suspense fallback="Loading">
          <LazyComponent />
        </React.Suspense>
      )}

      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Styled.Wrapper>
  );
};

export default UserList;
