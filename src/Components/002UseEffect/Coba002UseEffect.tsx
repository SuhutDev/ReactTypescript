import React, { useState, useEffect, useRef } from "react";

const Coba002UseEffect = () => {
  const [level, setLevel] = useState(1 as number);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    console.log("002.001 Dijalankan Setiap pergantian state");
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
  }, []);

  useEffect(() => {
    console.log("002.003 Dijalankan ketika state 'level' berubah");
  }, [level]);

  return (
    <div>
      <div>002. UseEffect</div>
      <div>{level}</div>
      <button onClick={() => setLevel(level + 1)}>Action</button>
    </div>
  );
};

export default Coba002UseEffect;
