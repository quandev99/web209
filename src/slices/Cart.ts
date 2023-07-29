import { pause } from "@/utils/pause";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  isLoading: false,
  error: "",
} as { carts: any[]; isLoading: boolean; error: string };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getAllCarts: (state) => {
      const localStorageData = JSON.parse(localStorage.getItem("CartItems")!);
      if (localStorageData && Array.isArray(localStorageData)) {
        pause(5000);
        state.isLoading = false;
        state.carts = localStorageData;
      } else {
        state.carts = [];
        state.isLoading = true;
      }
      return;
    },
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existProduct = state.carts.findIndex(
        (cart: any) => cart.id === newProduct.id
      );
      if (existProduct === -1) {
        state.carts.push(newProduct);
      } else {
        state.carts[existProduct].quantity += newProduct.quantity;
      }
      localStorage.setItem("CartItems", JSON.stringify(state.carts));
      return;
    },
    incrementCart: (state, action) => {
      const id = action.payload;
      state.carts.find((item: any) => item.id === id).quantity++;
      localStorage.setItem("CartItems", JSON.stringify(state.carts));
      return;
    },
    decrementCart: (state, action) => {
      console.log("decrementCart", action.payload);
      const items = state.carts.find((item: any) => item.id === action.payload);
      items.quantity--;
      if (items.quantity < 1) {
        const confirm = window.confirm(
          "Bạn có chắc không mua sản phẩm này không?"
        );
        if (confirm)
          state.carts = state.carts.filter((item: any) => item.id !== items.id);
        items.quantity = 1;
      }

      localStorage.setItem("CartItems", JSON.stringify(state.carts));
      return;
    },
    deleteCartItem: (state, action) => {
      const id = action.payload;
      state.carts = state.carts.filter((item: any) => item.id !== id);
      localStorage.setItem("CartItems", JSON.stringify(state.carts));
      return;
    },
    deleteAllCarts: (state) => {
      state.carts = [];
      localStorage.setItem("CartItems", JSON.stringify(state.carts));
      return;
    },
  },
});

export const {
  getAllCarts,
  addToCart,
  incrementCart,
  decrementCart,
  deleteCartItem,
  deleteAllCarts,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
