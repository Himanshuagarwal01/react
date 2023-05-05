import { React,useReducer } from 'react';

function reducer(state, action) {
  //this condition is called to increment the age
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  //this condition is called to decrement the age
  if (action.type === 'decrement_age') {
    return {
      age: state.age - 1
    };
  }

  // throw Error('Unknown action.');
  return state;
}

export default function Usereducer2() {
  const [state, dispatch] = useReducer(reducer, { age: 18 });//{ age: 18 }passed as an object

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <button onClick={() => {
        dispatch({ type: 'decrement_age' })
      }}>
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}