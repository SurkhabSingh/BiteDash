import { CDN_URL } from "../utils/constants";

// const StyleCard = {
//   backgroundColor: "#f0f0f0",
// };

const RestaurantCard = ({ restaurant }) => {
  // console.log(restaurant);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] h-[480px] rounded-lg hover:bg-gray-200 bg-gray-100"
    >
      <img
        className="rounded-lg w-[220px] h-[200px] "
        alt="res-img"
        src={CDN_URL + restaurant.info.cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-2">{restaurant.info.name}</h3>
      <h4>{restaurant.info.cuisines.join(", ")}</h4>
      <h4>{restaurant.info.avgRating} star</h4>
      <h4>{restaurant.info.costForTwo} </h4>
      <h4>DeliveryTime: {restaurant.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withLabelCard = (RestaurantCard) => {
  return (restaurant) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg ">
          Highly Acclaimed
        </label>
        <RestaurantCard {...restaurant} />
      </div>
    );
  };
};

export default RestaurantCard;
