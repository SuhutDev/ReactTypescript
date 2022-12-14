export type TState = {
  type: EAction;
  process: EProcess;
  data: TDataRes;
  errorMassage: string;
};

export type TAction = {
  type: EAction;
  process: EProcess;
  payload: TDataRes;
  errorMassage: string;
};

export enum EProcess {
  Request = "REQUEST",
  Received = "RECEIVED",
  Failed = "FAILED",
}

export enum EAction {
  Save = "SAVE",
}

export type TDataRes = {
  CustomerCode: string;
  CustomerName: string;
};

export type TSaveReq = {
  CustomerCode: string;
  CustomerName: string;
};
