import ItemsCard from "./ItemsCard";
import map_search from "../../assets/map-search.jpg";

const FeturedRentals = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="w-full flex justify-between">
        <h3 className="text-lg font-mono font-bold">Featured Rentals</h3>
        <div className="p-1 w-16 border text-center cursor-pointer">All</div>
      </div>
      <div className="grid grid-cols-4 gap-10 my-6 w-full mx-auto">
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </div>
      <div className="w-full flex shadow-sm shadow-slate-400 my-20">
        <div className="text-content flex-1 p-2 flex flex-col">
          <p className="text-lg text-black font-bold font-mono">
            Search Your Dream House On The Map
          </p>
          <small className="font-mono font-bold text-slate-500">
            Find the house you are looking for easily according to location
            information.
          </small>
          <div className="btn p-1 bg-red-500 text-white font-mono text-sm text-center w-32 rounded-lg my-auto cursor-pointer">
            Search on map
          </div>
        </div>
        <div className="img">
          <img src={map_search} alt="..." className="w-96 h-52" />
        </div>
      </div>
    </div>
  );
};

export default FeturedRentals;
