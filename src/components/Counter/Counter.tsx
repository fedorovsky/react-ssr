import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import * as counterModule from 'store/counter';
import * as Styled from './Counter.styled';
const Counter = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleDecrease = () => dispatch(counterModule.actions.decrease());

  const handleIncrease = () => dispatch(counterModule.actions.increase());

  const handleSetValue = () => dispatch(counterModule.actions.setValue(5));

  React.useEffect(() => {
    const hello = () => console.log('hello');
  }, []);

  return (
    <Styled.Wrapper>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleSetValue}>set 5</button>
      <span> {value} </span>
    </Styled.Wrapper>
  );
};

export default Counter;
