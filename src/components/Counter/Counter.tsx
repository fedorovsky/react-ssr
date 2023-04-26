import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import * as counterModule from 'store/counter';
import * as Styled from './Counter.styled';
const Counter = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleDecrease = () => dispatch(counterModule.actions.decrease());

  const handleIncrease = () => dispatch(counterModule.actions.increase());

  return (
    <Styled.Wrapper>
      <button onClick={handleDecrease}>-</button>
      <span> {value} </span>
      <button onClick={handleIncrease}>+</button>
    </Styled.Wrapper>
  );
};

export default Counter;
