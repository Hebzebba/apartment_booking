import Footer from "../../components/client/Footer";
import Header from "../../components/client/Header";
import ItemsCard from "../../components/client/ItemsCard";

const RentPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="fileters my-5 w-full shadow-md shadow-slate-600 bg-white flex justify-start items-center px-5 py-1 gap-x-2">
          <div className="category border border-slate-500 p-2 rounded-md">
            <select name="category" className="p-1 outline-none">
              <option value="">Category</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Duplex">Duplex</option>
              <option value="Mini Flat">Mini Flat</option>
              <option value="Room & Parlour">Room & Parlour</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Mansion">Mansion</option>
            </select>
          </div>
          <div className="category border border-slate-500 p-2 rounded-md">
            <select name="category" className="p-1 outline-none">
              <option value="">Number of rooms</option>
            </select>
          </div>
          <div className="category border border-slate-500 p-2 rounded-md">
            <select name="category" className="p-1 outline-none">
              <option value="">Size</option>
            </select>
          </div>

          <div className="category border border-slate-500 p-2 rounded-md flex">
            <label htmlFor="price" className="px-2">
              Price
            </label>
            <input type="range" name="price" id="price" />
          </div>
          <div className="ml-auto">
            <i className="fas fa-filter"></i>
          </div>
        </div>

        <div className="items grid grid-cols-4 gap-10 mb-5">
          <ItemsCard />
          <ItemsCard />
          <ItemsCard />
          <ItemsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RentPage;
