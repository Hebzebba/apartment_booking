import Header from "../../components/client/Header";
import Map from "react-map-gl";

const MapPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto h-full w-full shadow-md shadow-slate-500 my-5 overflow-hidden">
        <Map
          initialViewState={{
            longitude: -0.25,
            latitude: 6.083333,
            zoom: 9,
          }}
          style={{
            width: "100vw",
            height: "80vh",
            color: "red",
          }}
          mapboxAccessToken="pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2w1emN2MjBhMGRzbzNjcXYwemF2bXVhYSJ9.PFzwjVmO8HlTajvZX9MCSw"
          mapStyle="mapbox://styles/mapbox/streets-v9"
        ></Map>
      </div>
    </div>
  );
};

export default MapPage;
