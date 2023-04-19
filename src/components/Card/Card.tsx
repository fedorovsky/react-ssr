import * as React from 'react';
import * as Styled from './Card.styled';

const LazyComponent = React.lazy(() => import('components/LazyComponent'));

const UserList: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const handleShow = () => setVisible(true);

  return (
    <Styled.Wrapper>
      <Styled.Img src="/public/img/img.png" />
      <Styled.Background />

      <button type="button" onClick={handleShow}>
        Show
      </button>

      {isVisible && (
        <React.Suspense fallback="Loading">
          <LazyComponent />
        </React.Suspense>
      )}
    </Styled.Wrapper>
  );
};

export default UserList;
