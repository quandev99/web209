import { pause } from "@/utils/pause";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    pause(3000);
    const { data } = await axios.get(`http://localhost:3000/products`);
    return data;
  } catch (error: any) {
    return error.message;
  }
});
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: any) => {
    try {
      pause(2000);
      const { data } = await axios.post(
        `http://localhost:3000/products`,
        product
      );
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: any) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/products/${product.id}`,
        product
      );
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: any) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    return id;
  }
);
// // function middleware redux-thunk product

// export const fetchProducts = () => async (dispatch: any) => {
//   dispatch({ type: "products/fetchProductRequest" });
//   try {
//     await pause(1000);
//     const { data } = await axios.get("http://localhost:3000/products");
//     dispatch({ type: "products/fetchProductsSuccess", payload: data });
//   } catch (error: any) {
//     dispatch({ type: "products/fetchProductsError", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };
// export const addProduct = (product: any) => async (dispatch: any) => {
//   dispatch({ type: "products/fetchProductRequest" });
//   try {
//     await pause(500);
//     // call api
//     const { data } = await axios.post(
//       `http://localhost:3000/products`,
//       product
//     );
//     // rerender
//     dispatch({ type: "product/addProduct", payload: data });
//   } catch (error: any) {
//     dispatch({ type: "products/fetchProductsError", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };
// export const updateProduct = (product: any) => async (dispatch: any) => {
//   dispatch({ type: "products/fetchProductRequest" });
//   try {
//     await pause(500);
//     // call api
//     const { data } = await axios.put(
//       `http://localhost:3000/products/${product.id}`,
//       product
//     );
//     // rerender
//     dispatch({ type: "product/updateProduct", payload: data });
//   } catch (error: any) {
//     dispatch({ type: "products/fetchProductsError", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };
// export const deleteProduct = (id: any) => async (dispatch: any) => {
//   dispatch({ type: "products/fetchProductRequest" });
//   try {
//     await pause(500);
//     // call api
//     await axios.delete(`http://localhost:3000/products/${id}`);
//     // rerender
//     dispatch({ type: "product/deleteProduct", payload: id });
//   } catch (error: any) {
//     dispatch({ type: "products/fetchProductsError", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };
