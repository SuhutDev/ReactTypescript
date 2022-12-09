import React, { useState, useEffect, useRef } from "react";

const Coba002UseEffect = () => {
  const [level, setLevel] = useState(1 as number);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    console.log("002.001.001 Dijalankan Setiap pergantian state");
    return () => {
      console.log("002.001.002 Didestroy sesuai dengan dependencynya");
      //biasanya digunakan untuk melepas event yg related ke suatu control html
    };
  });

  useEffect(() => {
    console.log(
      "002.002.001 Dijalakan ketika pertama kalo component diload; default akan di jalankan 2 kali"
    );
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    console.log(
      "002.002.002 Dijalakan ketika pertama kalo component diload; dikasih flag agar dijalankan sekali"
    );
    //biasanya digunakan untuk melepas event yg related ke suatu control html

    return () => {
      console.log("002.002.003 Didestry sesuai dengan dependencynya");
      //biasanya digunakan untuk melepas event yg related ke suatu control html
    };
  }, []);

  useEffect(() => {
    console.log("002.003.001 Dijalankan ketika state 'level' berubah");

    return () => {
      console.log("002.003.002 Didestry sesuai dengan dependencynya");
    };
  }, [level]);

  return (
    <div>
      <div>002. UseEffect</div>
      <div>{level}</div>
      <button onClick={() => setLevel(level + 1)}>Add Level</button>
    </div>
  );
};

export default Coba002UseEffect;
