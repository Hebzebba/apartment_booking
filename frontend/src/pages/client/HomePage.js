import FeturedRentals from "../../components/client/FeaturedRentals";
import Header from "../../components/client/Header";
import HeroComponent from "../../components/client/HeroComponent";
import Footer from "../../components/client/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroComponent />
      <FeturedRentals />
      <Footer />
    </div>
  );
};

export default HomePage;
