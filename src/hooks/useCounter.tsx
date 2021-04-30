import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {RootState} from '../redux';
import {increase, decrease, increaseBy} from '../redux/counter.ts';

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

export default function useCounter(): CounterProps {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch],
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
}
