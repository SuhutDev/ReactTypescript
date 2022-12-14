import { EProcess, TAction, TDataRes, TState } from "./model";

export const initialState = {
  data: {} as TDataRes,
} as TState;

export function reducer(state: TState, action: TAction): TState {
  const { process, payload, errorMassage } = action;

  switch (process) {
    case EProcess.Request:
      return {
        ...state,
        type: action.type,
        process: process,
        data: payload !== undefined ? payload : state.data,
      };
    case EProcess.Received:
      return {
        ...state,
        type: action.type,
        process: process,
        data: payload !== undefined ? payload : state.data,
      };
    case EProcess.Failed:
      return {
        ...state,
        type: action.type,
        process: process,
        data: payload !== undefined ? payload : state.data,
        errorMassage: errorMassage,
      };
    default:
      return state;
  }
}
