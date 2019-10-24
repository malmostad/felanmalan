import React from "react";
import CookieReadMoreText from "../../texts/cookie-read-more";
const initialState = {
  nextStep: "Nästa steg",
  send: "Skicka in",
  skip: "Hoppa över",
  accept: "Acceptera",
  addPhoto: "Lägg till bild",
  addPhotoOnProblemAndPlace: (
    <>
      Lägg till <strong>bilder</strong> på <strong>problemet</strong> &
      <strong> platsen</strong>
    </>
  ),
  clickOrDragImage: "Klicka eller dra bild hit för att starta uppladdning",
  introPageTitle: <strong>Malmö stads felanmälan</strong>,
  introPageIngress: "Här anmäler du fel på Malmös gator, torg och parker.",
  introPageText:
    "Vi vill att tjänsten ska fungera så bra som möjligt för dig som besökare. För att kunna ta reda på vad vi kan göra bättre analyserar vi hur våra besökare använder tjänsten med webbkakor (cookies)",
  locationPageWhereIsTheError: (
    <>
      <strong>Vart</strong> är <strong>felet</strong>, <strong>placera </strong>
      det på <strong>kartan</strong>
    </>
  ),
  createNew: "Skapa ny",
  descriptionTitle: <strong>Beskriv problemet</strong>,
  description: "Beskrivning",
  descriptionPlaceHolder: "Beskriv problemet du vill felanmäla...",
  contactPageTitle: (
    <>
      <strong>Följ</strong> vad som <strong>händer</strong> med din
      <strong> felanmälan</strong>
    </>
  ),
  contactPageCanWeReachOutToYou: "Kan vi kontakta dig vid frågor?",
  contactExtraText: (
    <>Vill du inte följa eller bli kontaktad klicka bara skicka in</>
  ),
  name: "Namn",
  namePlaceholder: "Skriv dit namn",
  emailOrPhone: "E-post eller telefonnummer",
  emailOrPhonePlaceHolder: "Skriv din e-postadress eller ditt telefonnumer",
  sendIssueReport: "Skicka in felanmälan",
  donePageTitle: (
    <>
      <strong>Tack</strong> för din <br />
      <strong>felanmälan</strong>
    </>
  ),
  donePageText: "Den hjälper oss hålla vår vackra stad iordning.",
  readMore: "Läs mer",
  CookieReadMoreText
};
const textsReducer = (state = initialState, action) => {
  return initialState;
};

export default textsReducer;
