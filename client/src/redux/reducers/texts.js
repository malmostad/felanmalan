const initialState = {
  skip: "Hoppa över",
  accept: "Acceptera",
  addPhoto: "Lägg till bild",
  addPhotoOnProblemAndPlace: "Lägg till foton på problemet & platsen",
  clickOrDragImage: "Klicka eller dra bild hit för att starta uppladdning",
  introPageTitle: "Malmö stads felanmälan",
  introPageIngress: "Här anmäler du fel på Malmös gator, torg och parker.",
  introPageText:
    "Vi vill att tjänsten ska fungera så bra som möjligt för dig som besökare. För att kunna ta reda på vad vi kan göra bättre analyserar vi hur våra besökare använder tjänsten med webbkakor (cookies)",
  locationPageWhereIsTheError: "Vart är felet, placera det på kartan"
};
const textsReducer = (state = initialState, action) => {
  return initialState;
};

export default textsReducer;
