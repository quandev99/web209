import { produce } from "immer";

const initialState = {
  count: 0,
  isLoading: false,
};
export const counterReducer = (state = initialState, action: any) => {
  //immer
  return produce(state, (draftState) => {
    switch (action.type) {
      case "INCREMENT":
        draftState.count++;
        return;
      case "DECREMENT":
        draftState.count--;
        return;
      case "INCREASE":
        draftState.count += action.payload;
        draftState.isLoading = true;
        return;
      case "RESET":
        draftState.count = 0;
        return;
      default:
        return state;
    }
  });

  // switch (action.type) {
  //   case "INCREMENT":
  //     return { count: state.count + 1 };
  //   case "DECREMENT":
  //     return { count: state.count - 1 };
  //   case "INCREASE":
  //     return { count: state.count + action.payload };
  //   case "RESET":
  //     return { count: 0 };
  //   default:
  //     return state;
  // }
};
