import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  createRef,
} from "react";
import { JsxElement } from "typescript";
import Child from "./Child";

function Parent() {
  const [level, setLevel] = useState(1 as number);
  const childRef = createRef<any>();

  return (
    <div>
      <div>{level}</div>
      <button onClick={() => setLevel(level + 1)}>Add Level</button>
      <button onClick={() => childRef.current?.handleMessage(level.toString())}>
        Send value to child
      </button>
      <Child ref={childRef} />
    </div>
  );
}

export default Parent;
