import React, { useEffect } from "react";
import { Button, Input } from "..";
import {
  decrementCart,
  deleteAllCarts,
  deleteCartItem,
  getAllCarts,
  incrementCart,
} from "@/slices/Cart";
import { useAppDispatch, useAppSelector } from "@/app/hook";

type Props = {
  carts: Array<[]>;
};

const Cart = () => {
  const dispatch = useAppDispatch();
  const { carts }: Props = useAppSelector((state: any) => state.carts);
  useEffect(() => {
    dispatch(getAllCarts());
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-center font-bold mb-5">Cart</h2>
      {carts.length <= 0 ? (
        <div className="text-red-500 bg-red-100 p-2">
          Không có sản phẩm nào trong giỏ hàng
        </div>
      ) : (
        carts.length >= 1 && (
          <>
            <table className="">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {carts.map((item: any, index) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4 text-red-600 font-bold">
                        {item.price * item.quantity}
                      </td>
                      <td className="flex items-center">
                        <Button
                          type="danger"
                          onClick={() => dispatch(decrementCart(item.id))}
                        >
                          -
                        </Button>
                        <Input></Input>
                        <Button
                          type="primary"
                          onClick={() => dispatch(incrementCart(item.id))}
                        >
                          +
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => dispatch(deleteCartItem(item.id))}
                        >
                          X
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <Button
              className="mr-auto"
              type="danger"
              onClick={() => dispatch(deleteAllCarts())}
            >
              XX
            </Button>
            Total =
            {carts.reduce((sum, item: any) => {
              return sum + item?.price * item?.quantity;
            }, 0)}
          </>
        )
      )}
    </div>
  );
};

export default Cart;
