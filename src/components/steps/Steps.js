import { useUpdate } from "../../contexts/UpdateContext";
import { NavigationContext } from "../../contexts/NavigationContext";
import { useCookies } from "react-cookie";
import Cookie from "../cookie/Cookie";
import HeaderSection from "../header/HeaderSection";
import { useContext } from "react";
import Error from "../errors/Error";
import { formViews } from "../../views/index";
import { MainContainer } from "../styles/containers/Containers";

const Steps = () => {
  const [cookies] = useCookies(["cookieConsent"]);
  const { error, errorMessenger, errorStatusCode } = useUpdate();
  const { state } = useContext(NavigationContext);
  const { currentViewIndex, lastViewIndex } = state;

  return (
    <>
      <MainContainer
        currentViewIndex={currentViewIndex}
        lastViewIndex={lastViewIndex}
      >
        {cookies.cookieConsent ? (
          <>
            {formViews[state.currentViewIndex].name !== "MapView" && (
              <HeaderSection />
            )}
            {error ? (
              <Error
                errorMessage={errorMessenger}
                statusCode={errorStatusCode}
              />
            ) : (
              <>{formViews[state.currentViewIndex].component}</>
            )}
          </>
        ) : (
          <Cookie />
        )}
      </MainContainer>
    </>
  );
};

export default Steps;
