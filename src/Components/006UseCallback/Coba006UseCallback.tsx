import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";

const Coba005UseCallback = () => {
  const [value1, setValue1] = useState(1 as number);
  const [value2, setValue2] = useState(1 as number);

  const callbackSquareValue1Ref = useRef(false);

  const getSquareValue1 = useCallback(() => {
    // if (callbackSquareValue1Ref.current) {
    //   return; //return value tidak dilakukan disini
    // }

    // callbackSquareValue1Ref.current = true;
    console.log("hitung lagi ketika value1 : " + value1);
    return value1 ^ 2; //return value harus dilakukan disini
  }, [value1]);

  return (
    <div>
      <div>005. UseMemo</div>
      <div>Value 1 : {value1}</div>
      <Dispay getData={getSquareValue1} />
      <button onClick={() => setValue1(value1 + 1)}>Add Value 1</button>
      <button onClick={() => setValue2(value2 + 1)}>Add Value 2</button>
    </div>
  );
};

export default Coba005UseCallback;

type DisplayProps = {
  getData: Function;
};

const Dispay = ({ getData }: DisplayProps) => {
  useEffect(() => {
    console.log("diplay dijalankan");
  }, [getData]);

  var data = getData();
  return <div>Square Value 1 : {data}</div>;
};
