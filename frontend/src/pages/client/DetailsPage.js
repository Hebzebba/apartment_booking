import Header from "../../components/client/Header";
import ImageGalleryComponent from "../../components/client/ImageGallery";
import Map from "react-map-gl";
import Footer from "../../components/client/Footer";

const DetailsPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex justify-between my-5">
        <div className="left-side">
          <div className="gallery w-10/12">
            <div className="flex justify-between items-center py-2">
              <div>
                <h1 className="font-bold text-lg">Large family house</h1>
                <p className="text-gray-500">Lodon oxford st.</p>
              </div>
              <div className="price font-bold text-lg">GHS 3000</div>
            </div>
            <ImageGalleryComponent />
            <div className="information w-full shadow-sm shadow-slate-500 p-2 my-5">
              <h1 className="font-bold">General Information</h1>
            </div>

            <div className="information w-full shadow-sm shadow-slate-500 p-2 overflow-hidden">
              <Map
                initialViewState={{
                  longitude: -0.25,
                  latitude: 6.083333,
                  zoom: 9,
                }}
                style={{
                  width: "100%",
                  height: "30vh",
                  color: "red",
                }}
                mapboxAccessToken="pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2w1emN2MjBhMGRzbzNjcXYwemF2bXVhYSJ9.PFzwjVmO8HlTajvZX9MCSw"
                mapStyle="mapbox://styles/mapbox/streets-v9"
              ></Map>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
