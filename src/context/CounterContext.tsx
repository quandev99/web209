import { createContext, useReducer, useState } from "react";
import { produce } from "immer";
import { counterReducer } from "@/reducer/CounterReducer";
export const CounterContext = createContext({} as any);

// B1: Tạo context sử dụng createContext()
// B2: Wrapper App để share giá trị cho các component
// B3: Sử dụng Context: hooks useContext(context)

type CounterProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  count: 0,
  isLoading: false,
};

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(produce(counterReducer), initialState);
  //   const increment = () => setCount(count + 1);
  //   const decrement = () => setCount(count - 1);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
