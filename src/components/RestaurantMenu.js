import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    setResMenu(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(resMenu[0]?.info);

  // const { name, cuisines, costForTwo } = resMenu[0]?.info;

  return resMenu === null ? (
    <div>loading....</div>
  ) : (
    <div className="menu">
      <h1>{resMenu[0].info.name}</h1>
      <h3>
        {resMenu[0]?.info?.cuisines.join(", ")} - {resMenu[0]?.info?.costForTwo}
      </h3>
    </div>
  );
};

export default RestaurantMenu;
