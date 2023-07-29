import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "..";
import { instance } from "@/axios/config";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { v4 as uuidv4 } from "uuid";
import // addProduct,
// deleteProduct,
// fetchProducts,
// updateProduct,
"@/actions/product";
import { AiOutlinePlus } from "react-icons/ai";
// import { Dispatch } from "redux";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "@/actions/product";
import { addToCart } from "@/slices/Cart";
const ProductList = () => {
  // const dispatch: Dispatch<any> = useDispatch();
  // const { products, isLoading, error } = useSelector(
  //   (state: any) => state?.products
  // );
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state: any) => state.products
  );
  useEffect(() => {
    dispatch(getProducts() as any);
  }, [dispatch]);

  const handleAddProduct = async (product: any) => {
    dispatch(addProduct(product) as any);
  };

  const handleUpdateProduct = async (product: any) => {
    dispatch(updateProduct(product) as any);
  };
  const handleRemoveProduct = async ({ id }: any) => {
    dispatch(deleteProduct(id) as any);
  };
  if (isLoading)
    return (
      <SkeletonTheme baseColor="#dcdada" highlightColor="#a7a7a7">
        <Skeleton count={3} height={15} />
      </SkeletonTheme>
    );
  if (error) return <div className="text-red-500 bg-red-100 p-2">{error}</div>;

  return (
    <>
      {!isLoading &&
        products?.map((item: any) => (
          <div key={uuidv4()} className="flex items-center gap-x-2">
            <div className="text-red-500">{item.name}</div>
            <div className="text-red-500 font-medium">/ {item.price}</div>
            <Button
              onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
              className=""
              type="primary"
              icon={<AiOutlinePlus />}
            />
          </div>
        ))}

      <Button
        type="primary"
        onClick={() => handleAddProduct({ name: "Product D", price: 550 })}
      >
        Add Product
      </Button>
      <Button
        type="primary"
        onClick={() => handleUpdateProduct({ id: 4, name: "Product D Update" })}
      >
        Update Product
      </Button>
      <Button type="danger" onClick={() => handleRemoveProduct({ id: 4 })}>
        Remove Product
      </Button>
    </>
  );
};

export default ProductList;
