import ItemList from "./ItemList";

const RestaurantCategories = ({ data, toShow, onShow }) => {
  // console.log(data);
  const handleClick = () => {
    onShow(toShow);
  };
  return (
    <div>
      <div className=" w-6/12 bg-gray-50 mx-auto shadow-lg p-4 my-4 cursor-pointer ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>👇</span>
        </div>
        {toShow && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
