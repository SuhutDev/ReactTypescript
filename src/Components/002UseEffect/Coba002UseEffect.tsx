import React, { useState, useEffect } from "react";

const Coba002UseEffect = () => {
  const [level, setLevel] = useState(1 as number);

  useEffect(() => {
    console.log("002.001.001 Dijalankan Setiap pergantian state");
    return () => {
      console.log("002.001.002 Didestroy sesuai dengan dependencynya");
      //biasanya digunakan untuk melepas event yg related ke suatu control html
    };
  });

  useEffect(() => {
    //if react.StrictMode di enable maka ketika dev akan di eksekusi 2x
    //tapi ketika di build hanya di jalankan sekali
    //jadi tidak usah kuatir jika keliahtannya di jalankan 2x
    console.log(
      "002.002.001 Dijalakan ketika pertama kalo component diload; default akan di jalankan 2 kali"
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
