import { EAction, EProcess, TAction, TDataRes, TSaveReq } from "./model";

export const saveData = (
  dispatch: React.Dispatch<TAction>,
  request: TSaveReq
) => {
  dispatch({
    type: EAction.Save,
    process: EProcess.Request,
  } as TAction);

  try {
    setTimeout(() => {
      console.log("post to api");
    }, 2000);
  } catch {
    dispatch({
      type: EAction.Save,
      process: EProcess.Failed,
      errorMassage: "error",
    } as TAction);
  }
};
