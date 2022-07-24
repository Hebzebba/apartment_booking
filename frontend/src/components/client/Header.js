import { Link } from "react-router-dom";
import brand from "../../assets/brand.png";

const Header = () => {
  return (
    <div className="w-screen bg-white shadow-lg shadow-slate-300">
      <nav className="container mx-auto flex items-center h-16">
        <Link to="/home">
          <div className="brand flex justify-center items-center">
            <img src={brand} alt="..." />
            <span className="font-mono font-semibold p-2">FastHomes</span>
          </div>
        </Link>

        <ul className="flex justify-between items-center w-24 mx-9">
          <Link to="/rent">
            <li>Rentals</li>
          </Link>
          <Link to="/map">
            <li>Map</li>
          </Link>
        </ul>

        <div className="right flex flex-1 items-center justify-end">
          <Link to="/">
            <div className="sign-in mx-9 text-white rounded-md p-1 w-32 text-center cursor-pointer bg-red-600">
              SignIn
            </div>
          </Link>
          <Link to="/signup">
            <div className="sign-in cursor-pointer">SignUp</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
