import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { counterReducer } from "../slices/Counter";
import { productReducer } from "@/slices/Product";
import { cartReducer } from "@/slices/Cart";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    carts: cartReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
