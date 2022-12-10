import React, { useState, useMemo, useRef } from "react";

const Coba005UseMemo = () => {
  const [value1, setValue1] = useState(1 as number);
  const [value2, setValue2] = useState(1 as number);

  const memoValue1Ref = useRef(false);

  const memoValue1 = useMemo(() => {
    if (memoValue1Ref.current) {
      memoValue1Ref.current = true;
      return; //return value tidak dilakukan disini
    }

    memoValue1Ref.current = true;
    console.log("hitung lagi ketika value2 : " + value2);
    return Math.random(); //return value harus dilakukan disini
  }, [value1]);

  return (
    <div>
      <div>005. UseMemo</div>
      <div>Value 1 : {value1}</div>
      <div>Memo Value 1 : {memoValue1}</div>
      <button onClick={() => setValue1(value1 + 1)}>Add Value 1</button>
      <button onClick={() => setValue2(value2 + 1)}>Add Value 2</button>
    </div>
  );
};

export default Coba005UseMemo;
