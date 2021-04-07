import { useEffect, useContext } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { NavigationContext } from '../../contexts/NavigationContext'
import {
  StyledFormWrapper,
  StyledTextArea,
  DescriptionSpan,
  StyledLabel,
} from '../../components/styles/form/Form'
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
} from '../../components/styles/Typography/Typography'
import { useUpdate } from '../.././contexts/UpdateContext'

const DescriptionView = () => {
  const { setCurrentViewHeading } = useUpdate()
  const { handelSetFormInfo, formState } = useReport()
  const { dispatch } = useContext(NavigationContext)

  useEffect(() => {
    setCurrentViewHeading(
      <div>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Beskriv problemet </StyledSpanWord>
        </StyledHeroHeadingThin>
      </div>
    )
  }, [])

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
          <StyledLabel htmlFor="Beskrivning">
            Beskriv problemet du vill felanmäla
            {!formState.description && <DescriptionSpan> * </DescriptionSpan>}
          </StyledLabel>
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
