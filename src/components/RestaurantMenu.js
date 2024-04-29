import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resMenu = useRestaurantMenu(resID);
  const [showItems, setShowItems] = useState(null);
  // console.log(resMenu);

  const categories =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (categories) =>
        categories?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  if (resMenu.length === 0) return <div>Loading...</div>;

  const { name, cuisines, costForTwo } =
    resMenu.data.cards[2]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-extrabold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - Rs {costForTwo / 100} for two
      </p>

      <h2>
        Menu
        {categories.map((category, index) => (
          <RestaurantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            toShow={index === showItems}
            onShow={() => setShowItems(index === showItems ? null : index)}
          />
        ))}
      </h2>
    </div>
  );
};

export default RestaurantMenu;
