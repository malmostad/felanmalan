import MapBox from "../../components/mapBox/MapBox";
import { MapProvider } from "../../contexts/MapContext";

const MapView = () => {
  return (
    <>
      <MapProvider>
        <MapBox />
      </MapProvider>
    </>
  );
};

export default MapView;
