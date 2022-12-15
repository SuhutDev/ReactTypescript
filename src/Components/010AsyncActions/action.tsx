import { EAction, EProcess, TAction, TDataRes, TAddReq } from "./model";

export const addData = async (
  dispatch: React.Dispatch<TAction>,
  request: TAddReq
) => {
  dispatch({
    type: EAction.Add,
    process: EProcess.Request,
  } as TAction);

  try {
    console.log("post to api");

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);

    dispatch({
      type: EAction.Add,
      process: EProcess.Received,
      payload: {
        Id: "generate by server",
        CustomerCode: request.CustomerCode,
        CustomerName: request.CustomerName,
      },
      errorMassage: "error",
    } as TAction);
  } catch {
    dispatch({
      type: EAction.Add,
      process: EProcess.Failed,
      errorMassage: "error",
    } as TAction);
  }
};
