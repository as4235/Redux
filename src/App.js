import React, {useEffect, useState, useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
 const counter = useSelector(state => state.counter)
 const dispatch = useDispatch()
 return (
    <div>
      <div>counter: {counter}</div>
      <div><button onClick={() => dispatch(increment(10))}>+</button><button onClick={() => dispatch(decrement(10))}>-</button></div>
    </div>
  );
}

export default App;
