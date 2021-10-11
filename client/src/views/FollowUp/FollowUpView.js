import { NavigationContext } from "../../contexts/NavigationContext";
import { useUpdate } from "../.././contexts/UpdateContext";
import { useReport } from "../../contexts/ReportContext";
import { AiOutlineExclamationCircle as Exclamation } from "react-icons/ai";
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
  StyledDescription,
  Errand,
  StyledText,
  StyledTextTitle,
  StyledBorder,
  StyledTitleContainer,
} from "../../components/styles/Typography/Typography";
import React, { useEffect, useContext } from "react";
import {
  StyledOuterFollowUpView,
  StyledContentFollowUpView,
  StyledHeroContainer,
} from "../../components/styles/containers/Containers";
import { StyledOutlineButtonWhite } from "../../components/styles/buttons/Buttons";

import {
  StyledButtonOuter,
  StyledButtonInner,
} from "../../components/styles/containers/Containers";
import "../../globalstyles/GlobalStyle";

const FollowUpView = () => {
  const { setCurrentViewHeading, setImagesToBeUploaded } = useUpdate();
  const { formState, dispatch: reportDispatch } = useReport();
  const { dispatch: navigationDispatch } = useContext(NavigationContext);

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Tack</StyledSpanWord> för din{" "}
          <StyledSpanWord>anmälan</StyledSpanWord>
        </StyledHeroHeadingThin>
        <StyledDescription>
          Den hjälper oss hålla vår vackra stad i ordning.{" "}
          <Errand>Ärende: {formState.external_id}</Errand>
        </StyledDescription>
      </StyledHeroContainer>
    );
  }, [formState, setCurrentViewHeading]);

  return (
    <>
      <StyledOuterFollowUpView>
        <StyledContentFollowUpView>
          <StyledBorder>
            <StyledTitleContainer>
              <Exclamation
                size="1.6em"
                style={{
                  color: "#f8c900",
                  marginTop: "5px",
                  marginLeft: "5px",
                }}
              />
              <StyledTextTitle>
                Akut felanmälan på kvällar och helger
              </StyledTextTitle>
            </StyledTitleContainer>
            <StyledText>
              Om du vill felanmäla något som inte kan vänta på kvällar eller
              helger ringer du <a href="tel:040341000">040-34 10 00</a> och
              väljer att bli kopplad till vår jourtjänst.
            </StyledText>
          </StyledBorder>
        </StyledContentFollowUpView>
      </StyledOuterFollowUpView>
      <StyledButtonOuter>
        <StyledButtonInner>
          <StyledOutlineButtonWhite
            onClick={() => {
              setImagesToBeUploaded([]);
              reportDispatch({ type: "clearFormInfo" });
              navigationDispatch({ type: "reset" });
            }}
          >
            Skapa Ny
          </StyledOutlineButtonWhite>
        </StyledButtonInner>
      </StyledButtonOuter>
    </>
  );
};

export default FollowUpView;
