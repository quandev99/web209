import { produce } from "immer";

type Props = {
  carts: Array<any>;
  total: number; // Thêm biến total riêng
};

const initialState: Props = {
  carts: [],
  total: 0, // Khởi tạo giá trị tổng tiền là 0
};

export const cartReducer = (state = initialState, action: any) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case "carts/fetchingCart":
        const localStorageData = JSON.parse(localStorage.getItem("CartItems")!);
        if (localStorageData && Array.isArray(localStorageData)) {
          draftState.carts = localStorageData;
          // draftState.total = calculateTotal(localStorageData); // Tính tổng tiền và gán vào biến total
        } else {
          draftState.carts = [];
          draftState.total = 0; // Khởi tạo lại tổng tiền nếu không có sản phẩm trong giỏ hàng
        }
        break;
      case "cart/addToCart":
        const newProduct = action.payload;
        const existProduct = draftState.carts.findIndex(
          (cart: any) => cart.id === newProduct.id
        );
        if (existProduct === -1) {
          draftState.carts.push(newProduct);
        } else {
          draftState.carts[existProduct].quantity += newProduct.quantity;
        }
        // draftState.total = calculateTotal(draftState.carts); // Tính tổng tiền và gán vào biến total
        localStorage.setItem("CartItems", JSON.stringify(draftState.carts));
        break;
      case "cart/increment": {
        const id = action.payload;
        draftState.carts.find((item: any) => item.id === id).quantity++;
        // draftState.total = calculateTotal(draftState.carts); // Tính tổng tiền và gán vào biến total
        localStorage.setItem("CartItems", JSON.stringify(draftState.carts));
        break;
      }
      case "cart/decrement": {
        const items = draftState.carts.find(
          (item: any) => item.id === action.payload
        );
        items.quantity--;
        if (items.quantity < 1) {
          const confirm = window.confirm(
            "Bạn có chắc không mua sản phẩm này không?"
          );
          if (confirm)
            draftState.carts = draftState.carts.filter(
              (item: any) => item.id !== items.id
            );
          items.quantity = 1;
        }
        // Tính tổng tiền sau khi giảm số lượng sản phẩm
        // draftState.total = calculateTotal(draftState.carts);

        localStorage.setItem("CartItems", JSON.stringify(draftState.carts));
        break;
      }
      case "cart/deleteCartItem": {
        const id = action.payload;
        draftState.carts = draftState.carts.filter(
          (item: any) => item.id !== id
        );
        // draftState.total = calculateTotal(draftState.carts); // Tính tổng tiền và gán vào biến total
        localStorage.setItem("CartItems", JSON.stringify(draftState.carts));
        break;
      }
      case "cart/deleteProduct": {
        draftState.carts = [];
        draftState.total = 0; // Khởi tạo lại tổng tiền khi xóa tất cả sản phẩm trong giỏ hàng
        localStorage.setItem("CartItems", JSON.stringify(draftState.carts));
        break;
      }
      default:
        return state;
    }
  });
};

// // Hàm tính tổng tiền từ mảng sản phẩm
// const calculateTotal = (carts: Array<any>) => {
//   let total = 0;
//   for (const item of carts) {
//     total += item.price * item.quantity;
//   }
//   return total;
// };
