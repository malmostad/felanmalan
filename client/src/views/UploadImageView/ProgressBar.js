import styled from "styled-components";
import { StyledFlexCenter } from "../../components/styles/containers/Containers";

const StyledProgressBarOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`;

const StyledProgressBar = styled.progress`
  width: 250px;
  border: none;
  height: 10px;
  color: green !important;
  margin-top: 5px;
  position: absolute;
  bottom: 0;
  @media (max-height: 595px) {
    width: 210px;
  }
`;
const ProgressBar = ({ max, progress }) => {
  return (
    <StyledProgressBarOuter>
      <StyledFlexCenter>
        <StyledProgressBar value={progress} max={max}></StyledProgressBar>
      </StyledFlexCenter>
    </StyledProgressBarOuter>
  );
};

export default ProgressBar;
