import { useContext, useState, createContext, useEffect } from "react";

const UpdateContext = createContext();

if (!UpdateContext) {
  throw new Error("AppContext must be used with AppProvider!");
}

export const useUpdate = () => useContext(UpdateContext);

export const UpdateProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [errorStatusCode, setErrorStatusCode] = useState(null);
  const [errorMessenger, setErrorMessenger] = useState(null);
  const [currentViewHeading, setCurrentViewHeading] = useState("");
  const [imagesToBeUploaded, setImagesToBeUploaded] = useState([]);

  const updateValues = {
    error,
    setError,
    errorStatusCode,
    setErrorStatusCode,
    errorMessenger,
    setErrorMessenger,
    setCurrentViewHeading,
    currentViewHeading,
    imagesToBeUploaded,
    setImagesToBeUploaded,
  };

  useEffect(() => {
    switch (true) {
      case errorStatusCode < 499:
        setErrorMessenger(`${errorStatusCode} a client error, please try agin`);
        break;
      case errorStatusCode < 599:
        setErrorMessenger(
          `${errorStatusCode} something went wrong on our side, sorry but try agin`
        );
        break;
      default:
        setErrorMessenger("unexpected error");
        break;
    }
  }, [errorStatusCode]);

  return (
    <UpdateContext.Provider value={updateValues}>
      {children}
    </UpdateContext.Provider>
  );
};
