import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { counterActions } from 'store/counter/slice';
import * as Styled from './Counter.styled';
const Counter = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleDecrease = () => dispatch(counterActions.decrease());

  const handleIncrease = () => dispatch(counterActions.increase());

  return (
    <Styled.Wrapper>
      <button onClick={handleDecrease}>-</button>
      <span> {value} </span>
      <button onClick={handleIncrease}>+</button>
    </Styled.Wrapper>
  );
};

export default Counter;
