import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../../contexts/NavigationContext";
import { useReport } from "../../contexts/ReportContext";
import { useUpdate } from "../../contexts/UpdateContext";
import { LoadingSpinner } from "../styles/Spinners/Spinners";
import { postReport } from "../../api/api";
import {
  StyledButton,
  StyledOutlineButtonGreen,
  StyledOutlineButtonWhite,
  StyledButtonSkip,
} from "../styles/buttons/Buttons";
import {
  StyledButtonOuter,
  StyledButtonInner,
} from "../../components/styles/containers/Containers";

const Navigation = () => {
  const { formState, dispatch: reportDispatch } = useReport();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { setImagesToBeUploaded } = useUpdate();
  const { state, dispatch: navigationDispatch } = useContext(NavigationContext);
  const {
    disableNext,
    currentViewIndex,
    lastViewIndex,
    disableSubmit,
    submitViewIndex,
    disablePrevious,
    disableSkip,
  } = state;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  window.addEventListener("resize", function () {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <StyledButtonOuter
        windowWidth={windowWidth}
        currentViewIndex={currentViewIndex}
        lastViewIndex={lastViewIndex}
        formState={formState.images.length}
      >
        <StyledButtonInner>
          {currentViewIndex === 0 && !disableSkip && (
            <StyledButtonSkip
              windowWidth={windowWidth}
              onClick={() => {
                navigationDispatch({ type: "next" });
                navigationDispatch({ type: "disableNext" });
              }}
            >
              Hoppa över
            </StyledButtonSkip>
          )}
          {!(currentViewIndex === submitViewIndex || disableNext) && (
            <StyledButton
              onClick={() => {
                navigationDispatch({ type: "next" });
              }}
            >
              Nästa steg
            </StyledButton>
          )}
          {currentViewIndex === submitViewIndex && !disableSubmit && (
            <StyledButton
              onClick={async () => {
                if (isLoading) {
                  return;
                } else {
                  setIsLoading(true);
                }
                const response = await postReport(formState);
                reportDispatch({
                  type: "setFormInfo",
                  field: "external_id",
                  payload: response.data.IssueId,
                });
                setIsLoading(false);
                navigationDispatch({ type: "submit" });
              }}
            >
              {isLoading ? <LoadingSpinner /> : <span>Skicka in </span>}
            </StyledButton>
          )}
          {currentViewIndex === lastViewIndex && (
            <StyledOutlineButtonWhite
              onClick={() => {
                setImagesToBeUploaded([]);
                reportDispatch({ type: "clearFormInfo" });
                navigationDispatch({ type: "reset" });
              }}
            >
              Skapa Ny
            </StyledOutlineButtonWhite>
          )}
          {!(currentViewIndex === 0 || disablePrevious) && (
            <StyledOutlineButtonGreen
              onClick={() => {
                navigationDispatch({ type: "previous" });
              }}
            >
              Tillbaka
            </StyledOutlineButtonGreen>
          )}
        </StyledButtonInner>
      </StyledButtonOuter>
    </>
  );
};

export default Navigation;
