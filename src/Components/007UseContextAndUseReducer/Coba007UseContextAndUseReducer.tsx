import React, { useState, useRef, useCallback, useEffect } from "react";
import { CountProvider, useCount } from "./CountContext";

const Coba007UseContextAndUseReducer = () => {
  return (
    <CountProvider>
      <Display />
    </CountProvider>
  );
};

//https://stackoverflow.com/questions/68981814/react-context-returning-undefined-with-usecontext
function Display() {
  const { state, dispatch } = useCount();
  return (
    <>
      <div>007. UseContext And UseDeducer</div>
      <div>Value : {state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Action +</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Action -</button>
    </>
  );
}

export default Coba007UseContextAndUseReducer;
