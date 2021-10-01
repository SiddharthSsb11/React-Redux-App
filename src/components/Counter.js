import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions} from '../store/index';

const Counter = () => {
  const counter = useSelector((state)=> {//this cb will run twice
    //console.log('useSelector inside hi');
    return state.counter.counter; //1st counter is the identifier for our counterslice from key, value pair map--reducer prop value
  });
  const show = useSelector((state)=> state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    console.log('increase')
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };  

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    console.log('toggle')
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {incrementHandler}>Increment</button>
        <button onClick = {increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;