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
  Add = "ADD",
}

export type TDataRes = {
  Id: string;
  CustomerCode: string;
  CustomerName: string;
};

export type TAddReq = {
  CustomerCode: string;
  CustomerName: string;
};
