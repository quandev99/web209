// function middleware redux-thunk for counter

export const Increment = () => (dispatch: any) => {
  dispatch({ type: "INCREMENT" });
};
export const Decrement = () => (dispatch: any) => {
  dispatch({ type: "DECREMENT" });
};
export const Increase = (data: number) => (dispatch: any) => {
  dispatch({ type: "INCREASE", payload: data });
};
