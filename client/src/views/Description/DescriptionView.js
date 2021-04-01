import { useEffect, useContext } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { NavigationContext } from '../../contexts/NavigationContext'
import {
  StyledFormWrapper,
  StyledTextArea,
  DescriptionSpan,
} from '../../components/styles/form/Form'

const DescriptionView = () => {
  const { handelSetFormInfo, formState } = useReport()
  const { dispatch } = useContext(NavigationContext)

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
            Beskriv problemet du vill felanmäla
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
