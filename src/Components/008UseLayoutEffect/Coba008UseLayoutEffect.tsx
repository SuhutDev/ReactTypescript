import React, { useState, useEffect, useLayoutEffect } from "react";

const Coba008UselayoutEffect = () => {
  const [level, setLevel] = useState(1 as number);

  useEffect(() => {
    console.log("i am from useEffect");
  }, [level]);

  useLayoutEffect(() => {
    //this will  be executed after "level" show in page
    setTimeout(() => {
      alert("i am from userLayoutAffect "+level);
    }, 2000);
  }, [level]);

  return (
    <div>
      <div>008. UseLayoutEffect</div>
      <div>{level}</div>
      <button onClick={() => setLevel(level + 1)}>Add Level</button>
    </div>
  );
};

export default Coba008UselayoutEffect;
