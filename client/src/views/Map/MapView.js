import { useState, useEffect, useContext } from "react";
import ReactMapGl, {
  Marker,
  NavigationControl,
  AttributionControl,
  FlyToInterpolator,
  WebMercatorViewport,
} from "react-map-gl";
import CurrentLocationButton from "../../components/CurrentLocation/CurrentLocationButton";
import SearchBar from "../../components/searchBar/SearchBar";
import { useReport } from "../../contexts/ReportContext";
import { NavigationContext } from "../../contexts/NavigationContext";
import "./MapView.css";
import { fetchAddressMapBoxAPI } from "../../api/api";
import { ReactComponent as MarkerIcon } from "./pin.svg";

import { StyledButton } from "../../components/styles/buttons/Buttons";

import {
  StyledButtonOuter,
  StyledButtonInner,
} from "../../components/styles/containers/Containers";

import mapboxgl from "mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

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
  const { dispatch: navigationDispatch } = useContext(NavigationContext);
  const [address, setAddress] = useState("");
  const [userLocation, setUserLocation] = useState();
  const [renderPrefix, setRenderPrefix] = useState(false);
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);
  let isScrolling = false;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const { latitude, longitude, address } = formState;
    if (latitude && longitude && address) {
      setViewport({
        ...viewport,
        latitude,
        longitude,
      });
      setAddress(address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (isScrolling) {
      setViewport({
        ...nextViewport,
        longitude: viewport.longitude,
        latitude: viewport.latitude,
      });
    } else {
      setViewport(nextViewport);
    }
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
  const onScroll = (event) => {
    isScrolling = true;
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
    handelSetFormInfo("longitude", payload.longitude);
    handelSetFormInfo("latitude", payload.latitude);
    handelSetFormInfo("address", payload.address);
    navigationDispatch({ type: "enableNext" });
    setAddress(payload.address);
    setViewport({
      ...viewport,
      zoom: 17,
      longitude: payload.longitude,
      latitude: payload.latitude,
      transitionDuration: 400,
    });
  };

  const updateAddress = async () => {
    const response = await fetchAddressMapBoxAPI(viewport, MAX_BOUNDS);
    const { address, number } = response;
    const displayAddress = [address, number].join(" ").trim();
    setRenderPrefix(true);
    setAddress(displayAddress);
    navigationDispatch({ type: "enableNext" });
    handelSetFormInfo("address", displayAddress);
  };

  const isDisabled = () => {
    const { latitude, longitude, address } = formState;
    return !(latitude && longitude && address);
  };

  return (
    <>
      <div className="map-style">
        <SearchBar
          address={address}
          renderPrefix={renderPrefix}
          onResultSelect={onResultSelect}
          maxBounds={MAX_BOUNDS}
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
          onWheel={onScroll}
          attributionControl={false}
        >
          <AttributionControl compact={true} style={{ bottom: 0, left: 90 }} />
          <NavigationControl
            showCompass={false}
            onViewportChange={onZoom}
            style={{ right: 30, bottom: 30 }}
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
      <StyledButtonOuter>
        <StyledButtonInner>
          <StyledButton
            disabled={isDisabled()}
            onClick={() => {
              navigationDispatch({ type: "next" });
            }}
          >
            Nästa steg
          </StyledButton>
          <StyledButton
            secondary
            onClick={() => {
              navigationDispatch({ type: "previous" });
            }}
          >
            Tillbaka
          </StyledButton>
        </StyledButtonInner>
      </StyledButtonOuter>
    </>
  );
};

export default MapView;
