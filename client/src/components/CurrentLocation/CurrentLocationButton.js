import { useState, useEffect } from "react";
import { StyledFetchButton } from "../styles/buttons/Buttons";
import { FiNavigation as NavIcon } from "react-icons/fi";
import { LoadingSpinner } from "../styles/Spinners/Spinners";

const CurrentLocationButton = ({ onUserLocation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (window.navigator.permissions) {
      window.navigator.permissions
        .query({ name: "geolocation" })
        .then(function (permission) {
          permission.state === "denied" && setIsEnabled(false);
        });
    }
  });

  const fetchUserLocation = () => {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const payload = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        onUserLocation(payload);
        setIsLoading(false);
      },
      (error) => {
        setIsEnabled(false);
      }
    );
  };

  return (
    <>
      {isEnabled && (
        <StyledFetchButton onClick={fetchUserLocation}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <NavIcon
              size="1.4rem"
              style={{
                color: "white",
                marginTop: "5px",
                transform: "rotate(-20deg)",
              }}
            />
          )}
        </StyledFetchButton>
      )}
    </>
  );
};

export default CurrentLocationButton;
