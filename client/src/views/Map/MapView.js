import { useState, useEffect } from "react";
import ReactMapGl, {
  Marker,
  NavigationControl,
  FlyToInterpolator,
  WebMercatorViewport,
} from "react-map-gl";
import CurrentLocationButton from "../../components/CurrentLocation/CurrentLocationButton";
import SearchBar from "../../components/searchBar/SearchBar";
import { useReport } from "../../contexts/ReportContext";
import "./MapView.css";
import { fetchAddressMapBoxAPI } from "../../api/api";
import { ReactComponent as MarkerIcon } from "./pin.svg";

const DEFAULT_VIEWPORT = {
  latitude: 55.6051458,
  longitude: 13.003365,
  transitionDuration: 0,
  zoom: 13,
};
const MAX_BOUNDS = [
  [12.855952171065837, 55.49066310369751],
  [13.17594041283428, 55.6585718499375],
];

const MapView = () => {
  const { handelSetFormInfo, formState } = useReport();
  const [address, setAddress] = useState("");
  const [userLocation, setUserLocation] = useState();
  const [renderPrefix, setRenderPrefix] = useState(false);
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  useEffect(() => {
    const { latitude, longitude, address } = formState;
    if (latitude && longitude) {
      setViewport({
        ...viewport,
        latitude,
        longitude,
      });
      setAddress(address);
    }
  }, []);

  const isCoordinatesOutOfBounds = (coordinates, maxBounds) => {
    const [[swLng, swLat], [neLng, neLat]] = maxBounds;
    const [longitude, latitude] = coordinates;
    return (
      longitude < swLng ||
      longitude > neLng ||
      latitude < swLat ||
      latitude > neLat
    );
  };

  const isOutOfBounds = (bounds, maxBounds) => {
    const [sw, ne] = bounds;
    return (
      isCoordinatesOutOfBounds(sw, maxBounds) ||
      isCoordinatesOutOfBounds(ne, maxBounds)
    );
  };

  const onViewportChange = (nextViewport) => {
    const bounds = new WebMercatorViewport(nextViewport).getBounds();
    if (isOutOfBounds(bounds, MAX_BOUNDS)) {
      return;
    }
    setViewport(nextViewport);
    handelSetFormInfo("longitude", viewport.longitude);
    handelSetFormInfo("latitude", viewport.latitude);
  };

  const transitionEnd = () => {
    setViewport({
      ...viewport,
      transitionDuration: 0,
    });
  };

  const onZoom = (nextViewport) => {
    const bounds = new WebMercatorViewport(nextViewport).getBounds();
    if (isOutOfBounds(bounds, MAX_BOUNDS)) {
      return;
    }
    setViewport({ ...nextViewport, transitionDuration: 400 });
  };

  const onUserLocation = (payload) => {
    setUserLocation(payload);
    handelSetFormInfo("longitude", payload.longitude);
    handelSetFormInfo("latitude", payload.latitude);
    setViewport({
      ...viewport,
      longitude: payload.longitude,
      latitude: payload.latitude,
      transitionDuration: 400,
    });
  };

  const onResultSelect = (payload) => {
    setRenderPrefix(false);
    setAddress(payload.address);
    setViewport({
      ...viewport,
      longitude: payload.longitude,
      latitude: payload.latitude,
      transitionDuration: 400,
    });
  };

  const updateAddress = async () => {
    const response = await fetchAddressMapBoxAPI(viewport);
    const { address, number } = response;
    const displayAddress = [address, number].join(" ").trim();
    setRenderPrefix(true);
    setAddress(displayAddress);
    handelSetFormInfo("address", displayAddress);
  };

  return (
    <>
      <div className="map-style">
        <SearchBar
          address={address}
          renderPrefix={renderPrefix}
          onResultSelect={onResultSelect}
        />
        <ReactMapGl
          {...viewport}
          transitionInterpolator={new FlyToInterpolator()}
          onViewportChange={(payload) => onViewportChange(payload)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/iandwe/ck0i4nprb08w91cmkp1939q6z"
          width="100vw"
          height="100%"
          onTransitionEnd={transitionEnd}
          onMouseDown={transitionEnd}
          onMouseUp={updateAddress}
          onTouchStart={transitionEnd}
          onTouchEnd={updateAddress}
        >
          <NavigationControl
            showCompass={false}
            onViewportChange={onZoom}
            style={{ right: 30, bottom: 80 }}
          />
          <CurrentLocationButton onUserLocation={onUserLocation} />
          {userLocation && (
            <Marker
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
              offsetLeft={-10}
              offsetTop={-10}
            >
              <div className="pulsating-circle"></div>
            </Marker>
          )}
          <MarkerIcon className="pin-marker" />
        </ReactMapGl>
      </div>
    </>
  );
};

export default MapView;
