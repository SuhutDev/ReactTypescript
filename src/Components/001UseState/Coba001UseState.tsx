import React, { useState } from "react";

const Coba001UseState = () => {
  const [level, setLevel] = useState(1 as number);

  return (
    <div>
      <div>001. UseState</div>
      <div>{level}</div>
      <button onClick={() => setLevel(level + 1)}>Action</button>
    </div>
  );
};

export default Coba001UseState;
