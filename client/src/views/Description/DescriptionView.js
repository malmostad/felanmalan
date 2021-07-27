import { useEffect, useContext } from "react";
import { useReport } from "../../contexts/ReportContext";
import { NavigationContext } from "../../contexts/NavigationContext";
import {
  StyledFormWrapper,
  StyledTextArea,
  DescriptionSpan,
  StyledLabel,
  StyledFormDescription,
} from "../../components/styles/form/Form";
import { StyledBoldHeader } from "../../components/styles/Typography/Typography";
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
} from "../../components/styles/Typography/Typography";
import { StyledHeroContainer } from "../../components/styles/containers/Containers";
import { useUpdate } from "../.././contexts/UpdateContext";

const DescriptionView = () => {
  const { setCurrentViewHeading } = useUpdate();
  const { handelSetFormInfo, formState } = useReport();
  const { dispatch } = useContext(NavigationContext);

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Beskriv problemet </StyledSpanWord>
        </StyledHeroHeadingThin>
      </StyledHeroContainer>
    );
  }, []);

  useEffect(() => {
    formState.description
      ? dispatch({ type: "enableNext" })
      : dispatch({ type: "disableNext" });
  }, []);

  const handleFormInfo = (e) => {
    handelSetFormInfo("description", e.target.value);
    e.target.value
      ? dispatch({ type: "enableNext" })
      : dispatch({ type: "disableNext" });
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
    </>
  );
};

export default DescriptionView;
