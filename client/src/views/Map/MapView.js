import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { Wrapper } from '../../components/container/index'

const MapView = () => {
  return (
    <>
      <Wrapper>
        <HeadSection>
          <HeadSection.Inner>
            <HeadSection.Title>Map</HeadSection.Title>
          </HeadSection.Inner>
        </HeadSection>
        <NavigationButtons />
      </Wrapper>
    </>
  )
}

export default MapView
