import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";


const useRestaurantMenu = (resID) => {

  const[resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
       const data = await fetch(MENU_API_URL + resID);
       const json = await data.json();
       setResInfo(json)

  };

  return resInfo;
};

export default useRestaurantMenu;
