import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRestaurantCard } from "../utils/useRestaurantCard";
import { useOnline } from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const listOfRestaurants = useRestaurantCard();

  const status = useOnline();

  useEffect(() => {
    setFilteredList(listOfRestaurants);
  }, [listOfRestaurants]);

  useEffect(() => {
    if (searchText === "") {
      setFilteredList(listOfRestaurants);
    } else {
      const filteredRes = listOfRestaurants.filter((res1) =>
        res1.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredList(filteredRes);
    }
  }, [searchText, listOfRestaurants]);

  const handleSearch = () => {
    if (searchText == "") {
      setFilteredList(listOfRestaurants);
    } else {
      const filteredRes = listOfRestaurants.filter((res1) =>
        res1.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredList(filteredRes);
    }
  };

  const handleFilter = () => {
    const filteredList1 = filteredList.filter((res) => res.info.avgRating > 4);
    setFilteredList(filteredList1);
  };
  if (status === false) {
    return <h1>Looks like you are offline. Check your internet connection.</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link
            className="res-container"
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
