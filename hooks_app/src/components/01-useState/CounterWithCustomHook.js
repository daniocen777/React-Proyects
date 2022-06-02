import "./counter.css";
/* Hooks personalizados */
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>CounterWithCustomHook: {state} </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-info" onClick={reset}>
        reset
      </button>
      <button className="btn btn-info" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
