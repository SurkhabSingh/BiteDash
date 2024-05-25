import RestaurantCard, { withLabelCard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRestaurantCard } from "../utils/useRestaurantCard";
import { useOnline } from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const listOfRestaurants = useRestaurantCard();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const HighlyAcclaimed = withLabelCard(RestaurantCard);

  const status = useOnline();
  // const navigate = useNavigate();

  useEffect(() => {
    setFilteredList(listOfRestaurants);
  }, [listOfRestaurants]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText === "") {
        setFilteredList(listOfRestaurants);
      } else {
        const filteredRes = listOfRestaurants.filter((res1) =>
          res1.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredList(filteredRes);
      }
    }, 1000);
    return () => clearTimeout(timer);
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
    const filteredList1 = filteredList.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredList(filteredList1);
  };
  if (status === false) {
    return <h1>Looks like you are offline. Check your internet connection.</h1>;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-100 m-4 py-2 px-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleFilter}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex px-4 py-2 items-center">
          <input
            className="border border-solid border-black"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            className="flex flex-wrap"
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <HighlyAcclaimed restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
          // <div onClick={() => navigate(`/restaurants/${restaurant.info.id}`)}>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
