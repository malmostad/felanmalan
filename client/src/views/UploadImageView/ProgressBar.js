import styled from 'styled-components'
import { StyledFlexCenter } from '../../components/styles/containers/Containers'

const StyledProgressBarOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`

const StyledProgressBar = styled.progress`
  width: 190.5px;
  border: none;
  height: 10px;
  color: green !important;

  //style web kits might be needed for moz/ie/etc, also for styling purposes

  /* ::-moz-orient {
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
  } */
`
const ProgressBar = ({ max, progress }) => {
  return (
    <StyledProgressBarOuter>
      <StyledFlexCenter>
        <StyledProgressBar value={progress} max={max}>
          {progress}%
        </StyledProgressBar>
      </StyledFlexCenter>
      <label>{progress}%</label>
    </StyledProgressBarOuter>
  )
}

export default ProgressBar
