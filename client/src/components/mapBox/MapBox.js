import { useContext, useRef, useState, useEffect } from "react";
import ReactMapGl, {
  Marker,
  NavigationControl,
  FlyToInterpolator,
  WebMercatorViewport,
} from "react-map-gl";
import { MapContext } from "../../contexts/MapContext";
import CurrentLocationButton from "../CurrentLocation/CurrentLocationButton";
import SearchBar from "../searchBar/SearchBar";
import { useReport } from "../../contexts/ReportContext";
import "./MapBox.css";
import { fetchAddressMapBoxAPI } from "../../api/api";
import { ReactComponent as MarkerIcon } from "./pin.svg";

const MapBox = () => {
  const { handelSetFormInfo, formState } = useReport();
  const maxBounds = [
    [12.855952171065837, 55.49066310369751],
    [13.17594041283428, 55.6585718499375],
  ];
  const mapRef = useRef();
  const [address, setAddress] = useState("");
  const [updateUserLocation, setUpdateUserLocation] = useState(false);
  const [renderPrefix, setRenderPrefix] = useState(false);
  const { state, dispatch } = useContext(MapContext);
  const {
    viewport,
    userLocation,
    showPositionMarker,
    showLocationButton,
  } = state;

  useEffect(() => {
    const payload = {
      latitude: formState.latitude,
      longitude: formState.longitude,
      zoom: 13,
    };
    dispatch({
      type: "handleViewportCoordinates",
      payload,
    });
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

  const handleViewPortChange = (payload) => {
    const bounds = new WebMercatorViewport(payload).getBounds();
    if (isOutOfBounds(bounds, maxBounds)) {
      return;
    }
    dispatch({ type: "handleViewportChange", payload });
    handelSetFormInfo("longitude", payload.longitude);
    handelSetFormInfo("latitude", payload.latitude);
  };

  const removeFlyOver = () => {
    dispatch({ type: "removeFlyOver" });
  };

  const onZoom = (viewport) => {
    const bounds = new WebMercatorViewport(viewport).getBounds();
    if (isOutOfBounds(bounds, maxBounds)) {
      return;
    }
    dispatch({
      type: "handleViewportChange",
      payload: { ...viewport, transitionDuration: 400 },
    });
  };

  const onResultSelect = (payload) => {
    setRenderPrefix(false);
    setAddress(payload.address);
    dispatch({
      type: "handleViewportChange",
      payload: {
        ...viewport,
        longitude: payload.longitude,
        latitude: payload.latitude,
        transitionDuration: 400,
      },
    });
  };

  const handleTransitionEnd = () => {
    dispatch({
      type: "handleViewportChange",
      payload: { ...viewport, transitionDuration: 0 },
    });
  };

  const updateAddress = async () => {
    const fetchAddress = await fetchAddressMapBoxAPI(viewport);
    setRenderPrefix(true);
    if (fetchAddress.number === undefined) {
      setAddress(fetchAddress.address);
    } else {
      setAddress(`${fetchAddress.address} ${fetchAddress.number}`);
    }
    handelSetFormInfo(
      "address",
      `${fetchAddress.address} ${fetchAddress.number}`
    );
  };
  const updateSearchbarUserLocation = async () => {
    const userLocationAddress = await fetchAddressMapBoxAPI(userLocation);
    if (userLocationAddress.number === undefined) {
      setAddress(userLocationAddress.address);
    } else {
      setAddress(
        `${userLocationAddress.address} ${userLocationAddress.number}`
      );
    }
  };
  useEffect(() => {
    if (updateUserLocation) {
      updateSearchbarUserLocation();
    }
    setUpdateUserLocation(true);
  }, [userLocation]);

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
          ref={mapRef}
          transitionInterpolator={new FlyToInterpolator()}
          onViewportChange={(payload) => handleViewPortChange(payload)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/iandwe/ck0i4nprb08w91cmkp1939q6z"
          width="100vw"
          height="100%"
          onTransitionEnd={handleTransitionEnd}
          onMouseDown={removeFlyOver}
          onMouseUp={updateAddress}
          onTouchStart={removeFlyOver}
          onTouchEnd={updateAddress}
        >
          <NavigationControl
            showCompass={false}
            onViewportChange={onZoom}
            style={{ right: 30, bottom: 80 }}
          />
          {showLocationButton && <CurrentLocationButton />}

          {showPositionMarker && (
            <Marker
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
              offsetLeft={-12.5}
              offsetTop={-12.5}
            >
              <div className="blob"></div>
            </Marker>
          )}
          <MarkerIcon className="pin-marker" />
        </ReactMapGl>
      </div>
    </>
  );
};
export default MapBox;
