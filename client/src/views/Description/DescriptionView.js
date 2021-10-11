import { useEffect, useContext } from "react";
import { useReport } from "../../contexts/ReportContext";
import { NavigationContext } from "../../contexts/NavigationContext";
import { useUpdate } from "../.././contexts/UpdateContext";
import { StyledButton } from "../../components/styles/buttons/Buttons";
import {
  StyledFormWrapper,
  StyledTextArea,
  DescriptionSpan,
  StyledLabel,
  StyledFormDescription,
} from "../../components/styles/form/Form";
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
  StyledBoldHeader,
} from "../../components/styles/Typography/Typography";
import {
  StyledButtonOuter,
  StyledButtonInner,
  StyledHeroContainer,
} from "../../components/styles/containers/Containers";

const DescriptionView = () => {
  const { setCurrentViewHeading } = useUpdate();
  const { handelSetFormInfo, formState } = useReport();
  const { dispatch } = useContext(NavigationContext);

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Beskriv ärendet</StyledSpanWord>
        </StyledHeroHeadingThin>
      </StyledHeroContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormInfo = (e) => {
    handelSetFormInfo("description", e.target.value);
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledFormDescription>
          <StyledLabel htmlFor="Beskrivning">
            <StyledBoldHeader>
              Beskriv problemet du vill felanmäla
            </StyledBoldHeader>
            <DescriptionSpan> * </DescriptionSpan>
          </StyledLabel>
          <StyledTextArea
            type="text"
            defaultValue={formState.description}
            placeholder="Beskrivning..."
            onChange={handleFormInfo}
          />
        </StyledFormDescription>
      </StyledFormWrapper>
      <StyledButtonOuter>
        <StyledButtonInner>
          <StyledButton
            disabled={!formState.description}
            onClick={() => {
              dispatch({ type: "next" });
            }}
          >
            Nästa steg
          </StyledButton>
          <StyledButton
            secondary
            onClick={() => {
              dispatch({ type: "previous" });
            }}
          >
            Tillbaka
          </StyledButton>
        </StyledButtonInner>
      </StyledButtonOuter>
    </>
  );
};

export default DescriptionView;
