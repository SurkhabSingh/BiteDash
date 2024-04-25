import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  // console.log(data);

  return (
    <div>
      <div className=" w-6/12 bg-gray-50 mx-auto shadow-lg p-4 my-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>👇</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategories;
