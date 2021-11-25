import GlobalStyle from "./globalstyles/GlobalStyle";
import Steps from "./components/steps/Steps";
import "mapbox-gl/dist/mapbox-gl.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Steps />
    </>
  );
};

export default App;
