import React, { useState, useEffect, useRef } from "react";

const Coba004UseRef = () => {
  const [level, setLevel] = useState(1 as number);
  const rerender = useRef(1);

  useEffect(() => {
    console.log("Rerender");
    rerender.current = rerender.current + 1;
  });

  const AddRerender = () => {
    rerender.current = rerender.current + 4;
  };

  const CheckValues = () => {
    console.log({ level, rerender: rerender.current });
  };

  return (
    <div>
      <div>004. UseRef</div>
      <div>{level}</div>
      <button onClick={() => setLevel(level + 1)}>Add Level</button>
      <h2>Rerender: {rerender.current}</h2>
      <button onClick={AddRerender}>Add Rerender</button>
      <button onClick={CheckValues}>Check Value</button>
    </div>
  );
};

export default Coba004UseRef;
