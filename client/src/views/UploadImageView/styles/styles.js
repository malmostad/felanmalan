import styled from 'styled-components'

const StyledImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 220px;
  height: 220px;
  opacity: ${({ progress }) => progress};
  img {
    width: 220px;
    height: 220px;
  }
`
const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: inherit;
  width: inherit;
`
const StyledImageIcon = styled.div`
  color: red;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  right: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: pointer;
`
export { StyledImageContainer, StyledImageOverlay, StyledImageIcon }
