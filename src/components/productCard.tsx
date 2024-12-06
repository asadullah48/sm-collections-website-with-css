import React from "react"; 
import Image from "next/image"; 
import { useRouter } from 'next/navigation'; 
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"; 
import { addToCart } from "@/redux/features/cartSlice"; 
import { useAppDispatch } from "@/redux/hooks"; 
import "@/style/productCard.css";

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  sale: boolean | undefined;
}

const ProductCard = ({ id, img, name, price, sale }: IProduct) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getRating = () => {
    const randomNumber = (min: number, max: number) => {
      return Math.ceil(Math.random() * (max - min) + min);
    };

    switch (randomNumber(0, 5)) {
      case 0:
        return (
          <div className="ratingWrapper">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 1:
        return (
          <div className="ratingWrapper">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="ratingWrapper">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="ratingWrapper">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="ratingWrapper">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="ratingWrapper">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return <div></div>;
    }
  };

  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation();
    const payload = {
      id,
      name,
      img,
      price,
      quantity: 1,
    };

    dispatch(addToCart(payload));
  };

  return (
    <div className="cardWrapper" onClick={() => router.push(`/details/${id}`)}>
      <div className="cardImageWrapper">
        <Image
          className="productImage"
          width={1000}
          height={1142}
          src={img}
          alt={name}
        />

        {sale && (
          <div className="saleLabel">
            SALE
          </div>
        )}

        <div className="hoverEffectWrapper">
          <div className="iconWrapper">
            <div className="icon">
              <AiOutlineHeart />
            </div>
            <div
              className="icon"
              onClick={addProductToCart}
            >
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {getRating()}

      <h2 className="productName">{name}</h2>
      <p className="productPrice">${price}.00</p>
    </div>
  );
};

export default ProductCard;
