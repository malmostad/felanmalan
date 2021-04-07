import { useEffect, useContext } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { NavigationContext } from '../../contexts/NavigationContext'
import {
  StyledFormWrapper,
  StyledTextArea,
  DescriptionSpan,
} from '../../components/styles/form/Form'
import { StyledBoldHeader } from '../../components/styles/Typography/Typography'
import { useUpdate } from '../.././contexts/UpdateContext'

const DescriptionView = () => {
  const { setCurrentViewHeading, currentViewHeading } = useUpdate()
  const { handelSetFormInfo, formState } = useReport()
  const { dispatch } = useContext(NavigationContext)

  useEffect(() => {
    setCurrentViewHeading('Beskriv problemet')
  }, [currentViewHeading])

  useEffect(() => {
    formState.description ? dispatch({ type: 'enableNext' }) : dispatch({ type: 'disableNext' })
  }, [])

  const handleFormInfo = (e) => {
    handelSetFormInfo('description', e.target.value)
    e.target.value ? dispatch({ type: 'enableNext' }) : dispatch({ type: 'disableNext' })
  }

  return (
    <>
      <StyledFormWrapper>
        <form>
          <label htmlFor="Beskrivning">
            <StyledBoldHeader>Beskriv problemet du vill felanmäla</StyledBoldHeader>
            {!formState.description && <DescriptionSpan> * </DescriptionSpan>}
          </label>
          <StyledTextArea
            type="text"
            defaultValue={formState.description}
            placeholder="Beskrivning..."
            onChange={handleFormInfo}
          />
        </form>
      </StyledFormWrapper>
    </>
  )
}

export default DescriptionView
