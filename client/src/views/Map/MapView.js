import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'

const MapView = () => {
  return (
    <>
      <HeadSection>
        <HeadSection.Content>
          <HeadSection.Title>Map</HeadSection.Title>
        </HeadSection.Content>
      </HeadSection>
      <NavigationButtons />
    </>
  )
}

export default MapView
