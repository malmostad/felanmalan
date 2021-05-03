import styled from 'styled-components'
import { StyledFlexCenter } from '../../components/styles/containers/Containers'

const StyledProgressBarOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`

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

  //style web kits might be needed for moz/ie/etc, also for styling purposes

  ::-moz-orient {
  }
  ::-moz-progress-bar {
  }
  ::-ms-fill {
  }
  ::-webkit-progress-bar {
  }
  ::-webkit-progress-value {
  }
  ::-webkit-progress-inner-element {
  }
`
const ProgressBar = ({ max, progress }) => {
  return (
    <StyledProgressBarOuter>
      <StyledFlexCenter>
        <StyledProgressBar value={progress} max={max}></StyledProgressBar>
      </StyledFlexCenter>
    </StyledProgressBarOuter>
  )
}

export default ProgressBar
