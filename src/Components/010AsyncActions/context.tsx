import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { TAction, TState } from "./model";
import { initialState, reducer } from "./reducer";

const AppContext = createContext<
  | {
      state: TState;
      dispatch: Dispatch<TAction>;
    }
  | undefined
>(undefined);

type ProviderProps = { children: React.ReactNode };

const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

const useFormDetail = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useFormDetail must used within a Provider");
  }
  return context;
};

export { Provider, useFormDetail };
