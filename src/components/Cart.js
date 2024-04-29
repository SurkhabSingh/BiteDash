import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-2">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 text-white bg-black rounded-lg"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
        {/* <ItemList items={cartItems} /> */}

        {cartItems.length === 0 ? (
          <div>Cart is Items. Add some items to display here</div>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};
export default Cart;
