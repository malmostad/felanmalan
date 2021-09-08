import React, { useEffect, useRef, useContext } from "react";
import { useReport } from "../.././contexts/ReportContext";
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
  StyledTextFollowUp,
} from "../../components/styles/Typography/Typography";
import { NavigationContext } from "../../contexts/NavigationContext";
import {
  StyledError,
  StyledFormWrapper,
  StyledInput,
  StyledLabel,
  StyledCheckBox,
  StyledFollowUpBox,
  StyledFormDescription,
} from "../../components/styles/form/Form";
import { StyledHeroContainer } from "../../components/styles/containers/Containers";
import { StyledBoldHeader } from "../../components/styles/Typography/Typography";
import { useUpdate } from "../.././contexts/UpdateContext";

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// eslint-disable-next-line
const mobilePattern = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/;

const ContactInfoView = () => {
  const { setCurrentViewHeading } = useUpdate();
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const enable_tracking = useRef(false);
  const { handelSetFormInfo, formState } = useReport();
  const { dispatch } = useContext(NavigationContext);

  const handelFormInfo = (e) => {
    handelSetFormInfo("name", name.current.value);
    handelSetFormInfo("email", email.current.value);
    handelSetFormInfo("phone", phone.current.value);
    handelSetFormInfo("enable_tracking", enable_tracking.current.checked);
  };

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Kan</StyledSpanWord> vi{" "}
          <StyledSpanWord>kontakta</StyledSpanWord> dig vid
          <StyledSpanWord> frågor</StyledSpanWord>?
        </StyledHeroHeadingThin>
      </StyledHeroContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const phoneOrEmailSet =
      [!isEmptyPhoneNumberInput, !isEmptyEmailInput].filter((isSet) => isSet)
        .length > 0;

    if (
      (isEmptyEmailInput || isValidEmail) &&
      (isEmptyPhoneNumberInput || isValidPhoneNumber)
    ) {
      if (enable_tracking.current.checked && phoneOrEmailSet) {
        dispatch({ type: "enableSubmit" });
      } else if (!enable_tracking.current.checked) {
        dispatch({ type: "enableSubmit" });
      } else {
        dispatch({ type: "disableSubmit" });
      }
    } else {
      dispatch({ type: "disableSubmit" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    enable_tracking.current.checked,
    email.current.value,
    phone.current.value,
  ]);

  const isEmptyPhoneNumberInput =
    !phone.current.value ||
    (phone.current.value && phone.current.value.length === 0);

  const isEmptyEmailInput =
    !email.current.value ||
    (email.current.value && email.current.value.length === 0);

  const isValidEmail = emailPattern.test(email.current.value);

  const isValidPhoneNumber = mobilePattern.test(phone.current.value);

  const trackingRequirementsFulfilled = () => {
    const phoneOrEmailSet =
      [!isEmptyPhoneNumberInput, !isEmptyEmailInput].filter((isSet) => isSet)
        .length > 0;
    return phoneOrEmailSet && (isValidEmail || isValidPhoneNumber);
  };

  const shouldRenderPhoneError = () => {
    if (isEmptyPhoneNumberInput) {
      return false;
    }
    if (!isValidPhoneNumber) {
      return true;
    }
  };

  const shouldRenderEmailError = () => {
    if (isEmptyEmailInput) {
      return false;
    }
    if (!isValidEmail) {
      return true;
    }
  };
  return (
    <>
      <StyledFormWrapper>
        <StyledFormDescription>
          <div>
            <StyledLabel htmlFor="name">
              <StyledBoldHeader>Namn</StyledBoldHeader>
              <StyledInput
                placeholder="Skriv ditt namn"
                type="name"
                name="name"
                defaultValue={formState.name}
                ref={name}
                onChange={handelFormInfo}
              />
            </StyledLabel>
          </div>
          <div>
            <StyledLabel htmlFor="email">
              <StyledBoldHeader>E-post</StyledBoldHeader>
              {shouldRenderEmailError() && (
                <StyledError>Kontrollera email</StyledError>
              )}
              <StyledInput
                placeholder="Skriv din email"
                type="email"
                name="email"
                defaultValue={formState.email}
                ref={email}
                onChange={handelFormInfo}
              />
            </StyledLabel>
          </div>
          <div>
            <StyledLabel htmlFor="phone">
              <StyledBoldHeader>Telefonnummer</StyledBoldHeader>
              {shouldRenderPhoneError() && (
                <StyledError>Kontrollera telefonnummer</StyledError>
              )}
              <StyledInput
                placeholder="Skriv ditt telefonnummer"
                type="phone"
                name="phone"
                defaultValue={formState.phone}
                ref={phone}
                onChange={handelFormInfo}
              />
            </StyledLabel>
          </div>
          <StyledFollowUpBox>
            <StyledCheckBox
              type="checkbox"
              name="enable_tracking"
              defaultChecked={formState.enable_tracking}
              ref={enable_tracking}
              onChange={handelFormInfo}
            />
            <StyledTextFollowUp>
              {" "}
              Vill du få uppföljning på ditt ärende?
            </StyledTextFollowUp>
          </StyledFollowUpBox>
          {enable_tracking.current.checked &&
            !trackingRequirementsFulfilled() && (
              <StyledError> Fyll i telefonnumer eller e-post </StyledError>
            )}
        </StyledFormDescription>
      </StyledFormWrapper>
    </>
  );
};

export default ContactInfoView;
