import { useContext, useState, createContext, useEffect } from "react";

const UpdateContext = createContext();

if (!UpdateContext) {
  throw new Error("AppContext must be used with AppProvider!");
}

export const useUpdate = () => useContext(UpdateContext);

export const UpdateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorStatusCode, setErrorStatusCode] = useState(null);
  const [errorMessenger, setErrorMessenger] = useState(null);
  const [currentViewHeading, setCurrentViewHeading] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageURI, setImageURI] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagesToBeUploaded, setImagesToBeUploaded] = useState([]);

  const updateValues = {
    setLoading,
    loading,
    error,
    setError,
    errorStatusCode,
    setErrorStatusCode,
    errorMessenger,
    setErrorMessenger,
    setCurrentViewHeading,
    currentViewHeading,
    setUploadProgress,
    uploadProgress,
    imageURI,
    setImageURI,
    uploadStatus,
    setUploadStatus,
    uploading,
    setUploading,
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
