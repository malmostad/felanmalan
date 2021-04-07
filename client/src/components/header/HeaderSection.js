import { useUpdate } from '../../contexts/UpdateContext'
import { StyledHeaderContainer, StyledHeaderContainerText } from '../styles/containers/Containers'
import { StyledHeroHeadingThin } from '../styles/Typography/Typography'

const HeaderSection = () => {
  const { currentViewHeading } = useUpdate()
  return (
    <>
      <StyledHeaderContainer>
        <StyledHeaderContainerText>
          <StyledHeroHeadingThin>{currentViewHeading}</StyledHeroHeadingThin>
        </StyledHeaderContainerText>
      </StyledHeaderContainer>
    </>
  )
}

export default HeaderSection
