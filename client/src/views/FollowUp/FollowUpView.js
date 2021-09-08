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
import React, { useEffect } from "react";
import {
  StyledOuterFollowUpView,
  StyledContentFollowUpView,
  StyledHeroContainer,
} from "../../components/styles/containers/Containers";
import "../../globalstyles/GlobalStyle";

const FollowUpView = () => {
  const { setCurrentViewHeading } = useUpdate();
  const { formState } = useReport();

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Tack</StyledSpanWord> för din{" "}
          <StyledSpanWord>felanmälan</StyledSpanWord>
        </StyledHeroHeadingThin>
        <StyledDescription>
          Den hjälper oss hålla vår vackra stad iordning.{" "}
          <Errand>Ärende: {formState.external_id}</Errand>
        </StyledDescription>
      </StyledHeroContainer>
    );
  });

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
    </>
  );
};

export default FollowUpView;
