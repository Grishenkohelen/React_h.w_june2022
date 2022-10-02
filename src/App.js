import {useReducer} from "react";

const init = (initialValue) => {
  return {counter1: initialValue, counter2:initialValue}
}

const reducer = (state, action)=>{
  return {...state}
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <div>
      <h1>counter1:{state.counter1}</h1>
      <h1>counter2:{state.counter2}</h1>
        <button>inc</button>
        <button>dec</button>
        <button>reset</button>
    </div>
  );
};

export  {App};
