import React, { useLayoutEffect } from "react";
import { addData } from "./action";
import { EAction, EProcess, TAddReq } from "./model";
import { Provider, useFormDetail } from "./context";

const Coba010AsyncActions = () => {
  return (
    <>
      <Provider>
        <FormDetail />
      </Provider>
    </>
  );
};

function FormDetail() {
  const { state, dispatch } = useFormDetail();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    var customerCode = event.target[0].value;
    var customerName = event.target[1].value;
    let request: TAddReq = {
      CustomerCode: customerCode,
      CustomerName: customerName,
    };
    addData(dispatch, request);
  };

  useLayoutEffect(() => {
    if (state.process === EProcess.Received) {
      if (state.type === EAction.Add) {
        alert("Add suceess : " + JSON.stringify(state.data));
        
      }
    } else if (state.process === EProcess.Failed) {
      alert("Add fail : " + state.errorMassage);
    }
  }, [state.type, state.process, state.errorMassage]);

  return (
    <>
      <div>010. AsynchActions</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            {"Customer Code"}
            <input type="text" />
          </div>

          <div>
            {"Customer Name"}
            <input type="text" />
          </div>
          <button type="submit">
            {state.process === EProcess.Request
              ? "Process ...."
              : "Add Customer"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Coba010AsyncActions;
