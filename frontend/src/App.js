import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/client/DetailsPage";
import HomePage from "./pages/client/HomePage";
import MapPage from "./pages/client/MapPage";
import RentPage from "./pages/client/RentPage";
import ClientSignIn from "./pages/client/SignIn";
import ClientSignUp from "./pages/client/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClientSignIn />} />
        <Route path="/signup" element={<ClientSignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
