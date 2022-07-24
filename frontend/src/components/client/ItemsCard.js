const ItemsCard = () => {
  return (
    <div className="card w-72 shadow-sm shadow-slate-400 p-1">
      <div className="card-img">
        <img
          src={require("../../assets/hero-bg.jpg")}
          alt="..."
          className="w-full h-36 overflow-hidden"
        />
        <div className="card-body">
          <p className="price text-base font-bold text-slate-900 mt-2 font-mono">
            GHS 3000
          </p>
          <p className="price text-sm font-bold text-slate-900 mt-2 font-mono">
            Apartment for rent
          </p>
          <p className="price text-sm font-bold text-gray-400 mt-2 font-mono">
            London oxford st.
          </p>
          <p className="price text-sm font-bold text-gray-400 mt-2 font-mono">
            26 November 2022
          </p>
          <div className="price text-sm font-bold text-slate-900 my-2 font-mono flex justify-between w-1/2">
            <i class="fas fa-home"> 3+1</i>
            <i class="fas fa-bath"> 4</i>
            <i class="fas fa-compass"> 154m</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
