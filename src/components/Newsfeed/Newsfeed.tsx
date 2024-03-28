import * as React from 'react';
import { useGetPreviewsQuery } from 'store/newsfeed/api';
import * as Styled from './Newsfeed.styled';

const Newsfeed = () => {
  const { data: list } = useGetPreviewsQuery(undefined, {
    // refetchOnFocus: isActiveFocus,
    // refetchOnMountOrArgChange: 5
  });

  const handleClickGetMore = () => {
    console.log('hello');
  };

  if (!list) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <h1>Newsfeed</h1>
      <button onClick={handleClickGetMore}>Get More</button>
      {
        <ul>
          {list.map((preview) => (
            <li key={preview.id}>{preview.title}</li>
          ))}
        </ul>
      }
    </Styled.Wrapper>
  );
};

export default Newsfeed;
