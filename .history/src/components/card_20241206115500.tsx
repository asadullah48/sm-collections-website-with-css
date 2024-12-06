import { useAppSelector } from "@/redux/hooks"; // Importing the Redux selector hook
import { RxCross1 } from "react-icons/rx"; // Importing the cross icon
import CartProduct from "./cardCollection"; // Importing the CartProduct component
import "@/style/cart.css";

// Cart component that takes 'setShowCart' as a prop to control cart visibility
const Cart = ({ setShowCart }: any) => {
  // Accessing the cart items from Redux store using the useAppSelector hook
  const products = useAppSelector((state:any) => state.cartReducer);

  // Function to calculate the total price of all items in the cart
  const getTotal = () => {
    let total = 0;
    // Iterating over each product to calculate the total
    products.forEach((item: any) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        {/* Close button to hide the cart */}
        <RxCross1
          className="cart-close-icon"
          onClick={() => setShowCart(false)} // Calls setShowCart to hide the cart
        />

        {/* Cart header */}
        <h3 className="cart-header">Your Cart</h3>

        {/* Cart product list */}
        <div className="cart-product-list">
          {products?.map((item: any) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        {/* Total price section */}
        <div className="cart-total">
          <p>Total</p>
          <p>${getTotal()}.00</p>
        </div>

        {/* Cart actions buttons */}
        <button className="cart-action-button">View Cart</button>
        <button className="cart-action-button">CheckOut</button>
      </div>
    </div>
  );
};

export default Cart;
