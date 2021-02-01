import { useContext, useState, useEffect, createContext } from 'react';

const UpdateContext = createContext();

export const useUpdate = () => useContext(UpdateContext);

export const UpdateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState(undefined);
  const [previousView, setPreviousView] = useState(undefined);
  const [nextView, setNextView] = useState(undefined);
  const [renderNext, setRenderNext] = useState(false);
  const [renderPrevious, setRenderPrevious] = useState(false);
  const [acceptCookies, setAcceptCookies] = useState(false);

  // //upload view
  // const [renderUploadView, setRenderUploadView] = useState(false)
  // //map view
  // const [renderMapView, setRenderMapView] = useState(false)
  // // desc view
  // const [renderDescriptionView, setRenderDescriptionView] = useState(false)
  // //contact view
  // const [renderContactInfoView, setRenderContactInfoView] = useState(false)
  // //follow up view
  // const [renderFollowUpView, setRenderFollowUpView] = useState(false)

  useEffect(() => {
    console.log(currentView);
  }, [currentView]);

  const updateValues = {
    loading,
    setLoading,
    renderNext,
    setRenderNext,
    renderPrevious,
    setRenderPrevious,
    currentView,
    setCurrentView,
    previousView,
    nextView,
    setNextView,
    setPreviousView,
    acceptCookies,
    setAcceptCookies,
    // renderUploadView,
    // setRenderUploadView,
    // renderMapView,
    // setRenderMapView,
    // renderDescriptionView,
    // setRenderDescriptionView,
    // renderContactInfoView,
    // setRenderContactInfoView,
    // renderFollowUpView,
    // setRenderFollowUpView
  };

  return (
    <UpdateContext.Provider value={updateValues}>
      {!loading && children}
    </UpdateContext.Provider>
  );
};
