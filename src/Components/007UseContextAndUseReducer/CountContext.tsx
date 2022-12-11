import React, { createContext, useContext, useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { count: number };
type CountProviderProps = { children: React.ReactNode };

const CountStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined); //{ state: { count: 0 } as State, dispatch: () => {} }

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = { state, dispatch };
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountStateContext);
  if (context === undefined) {
    throw new Error(`useCount must used within a CountProvider`);
  }
  return context;
}

export { CountProvider, useCount };
