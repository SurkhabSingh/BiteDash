import { CDN_URL } from "../utils/constants";

const StyleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="res-card" style={StyleCard}>
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + restaurant.info.cloudinaryImageId}
      />
      <h3>{restaurant.info.name}</h3>
      <h4>{restaurant.info.cuisines.join(", ")}</h4>
      <h4>{restaurant.info.avgRating}</h4>
      {/* <h4>{restaurant.info.sla.deliveryTime}</h4> */}
    </div>
  );
};

export default RestaurantCard;
