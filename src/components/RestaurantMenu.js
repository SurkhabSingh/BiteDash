import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resMenu = useRestaurantMenu(resID);
  console.log(resMenu);

  if (resMenu.length === 0) return <div>Loading...</div>;

  const { name, cuisines, costForTwo } =
    resMenu.data.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - Rs {costForTwo / 100} for two
      </p>

      <h2>Menu</h2>

      {resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (outer, index) => (
          <ul key={index}>
            <h2>{outer.card.card.title}</h2>
            {outer.card?.card?.itemCards?.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs. {item.card.info.price / 100}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
