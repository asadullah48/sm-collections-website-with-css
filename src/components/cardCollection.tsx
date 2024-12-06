import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import React from "react";
import "@/style/cardCollection.css";

// Defining the props type for the CartProduct component
interface propsType {
  id: number; 
  img: string;
  name: string; 
  price: number; 
  quantity: number; 
}

// The CartProduct component, which displays a product in the cart
const CartProduct: React.FC<propsType> = ({
  id,
  img,
  name,
  price,
  quantity,
}) => {
  // Dispatch function to trigger actions in Redux
  const dispatch = useAppDispatch();
  return (
    <div className="cart-product-container">
      {/* Product details section */}
      <div className="cart-product-details">
        <Image
          className="cart-product-image"
          src={img}
          alt={name}
          width={100}
          height={100}
        />
        <div className="cart-product-info">
          <h3 className="cart-product-name">{name}</h3> {/* Product name */}
          <p className="cart-product-price">
            {quantity} + ${price}.00
          </p>{" "}
          {/* Quantity and price of the product */}
        </div>
      </div>

      {/* Cross icon to remove the item from the cart */}
      <RxCross1
        className="cart-remove-icon"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
