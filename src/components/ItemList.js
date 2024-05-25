import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    const itemExists = cartItems.some(
      (existingItem) => existingItem.card.info.id === item.card.info.id
    );

    if (!itemExists) {
      dispatch(addItem(item));
    } else {
      console.log("Item already in cart:", item.card.info);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left  flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-left">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <button
              className="bg-black p-1 m-1 text-white absolute rounded-md"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              Add +
            </button>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-4/5 border border-slate-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
