import { forwardRef, useImperativeHandle } from "react";

export type ChildHandle = {
  handleMessageChild: (message: string) => void;
};

type ChildProps = {
  handleMessageParent: (message: string) => void;
};

const Child = forwardRef<ChildHandle, ChildProps>(
  (props: ChildProps, ref: any) => {
    useImperativeHandle(ref, () => {
      return {
        handleMessageChild(message: string) {
          alert("terima massage dari parent : " + message);
        },
      };
    });

    return (
      <>
        <div>Child</div>
        <button
          onClick={() => props.handleMessageParent("ini message dari child")}
        >
          Send value to parent
        </button>
      </>
    );
  }
);

export default Child;
