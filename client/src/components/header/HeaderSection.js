import { useUpdate } from '../../contexts/UpdateContext'
import { Header } from './index'

const HeaderSection = () => {
  const { currentViewHeading } = useUpdate()
  return (
    <Header>
      <Header.Inner>
        <Header.Title>{currentViewHeading}</Header.Title>
      </Header.Inner>
    </Header>
  )
}

export default HeaderSection
