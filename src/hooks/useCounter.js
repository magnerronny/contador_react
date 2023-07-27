import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "../store/counter";
// import { decrement, increment, incrementByAmount, reset } from "../store";

export const useCounter = () => {
  const { counter } = useSelector((state) => state.counter );
  const dispatch = useDispatch();


  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onReset = () => {
    dispatch(reset());
  };

  const onIncrementByAmount = (data) => {
    dispatch( incrementByAmount(data))
  }

  return {
    //* Propiedades
    counter,
    //* Metodos
    onIncrement,
    onDecrement,
    onReset,
    onIncrementByAmount
  }

}
