import { produce } from "immer";

const initialState: {
  products: Array<[]>;
  isLoading: boolean;
  error: string;
} = {
  products: [],
  isLoading: false,
  error: "",
};

export const productReducer = (state = initialState, action: any) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case "products/fetchProductRequest":
        draftState.isLoading = true;
        break;
      case "products/fetchProductsSuccess":
        draftState.products = action.payload;
        break;
      case "products/fetchProductsError":
        draftState.error = action.payload;
        break;
      case "product/fetchingFinally":
        draftState.isLoading = false;
        break;
      case "product/addProduct":
        draftState.products.push(action.payload);
        break;
      case "product/updateProduct":
        const product = action.payload;
        draftState.products = draftState.products.map((item: any) =>
          item.id === product.id ? product : item
        );
        // draftState.products[action.payload.id] = action.payload;
        break;
      case "product/deleteProduct":
        const id = action.payload;
        draftState.products = draftState.products.filter(
          (item: any) => item.id !== id
        );
        break;

      default:
        return state;
    }
  });
};
