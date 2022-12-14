import {
  useCallback, useRef, useState
} from "react";
import Child, { ChildHandle } from "./Child";

function Parent() {
  const [level, setLevel] = useState(1 as number);
  const childRef = useRef<ChildHandle>(null);

  const handleMessageParent = useCallback(
    (message: string) => {
      alert(message + "; dengan state di parent " + level);
    },
    [level]
  );
  return (
    <div>
      <div>{level}</div>
      <button onClick={() => setLevel(level + 1)}>Add Level</button>
      <button
        onClick={() => childRef.current?.handleMessageChild(level.toString())}
      >
        Send value to child
      </button>
      <Child ref={childRef} handleMessageParent={handleMessageParent} />
    </div>
  );
}

export default Parent;
