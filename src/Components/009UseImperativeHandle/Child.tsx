import React, { forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props: any, ref: any) => {
  useImperativeHandle(ref, () => {
    return {
      handleMessage(message: string) {
        alert("terima massage dari parent : " + message);
      },
    };
  });

  return (
    <>
      <div>Child</div>
    </>
  );
});

export default Child;
