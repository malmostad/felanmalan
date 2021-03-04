import { useEffect, useContext, useRef } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'
import { NavigationContext } from '../../contexts/NavigationContext'

const DescriptionView = () => {
  const descriptionRef = useRef('')
  const { handelSetFormInfo, formState } = useReport()
  const { dispatch } = useContext(NavigationContext)

  useEffect(() => {
    descriptionRef.current.value
      ? dispatch({ type: 'enableNext' })
      : dispatch({ type: 'disableNext' })
  }, [descriptionRef.current.value])

  const handleFormInfo = () => {
    handelSetFormInfo('description', descriptionRef.current.value)
  }

  return (
    <>
      <form>
        <label>
          Beskrivning
          <textarea
            ref={descriptionRef}
            type="text"
            defaultValue={formState.description}
            placeholder="Beskriv problemet du vill felanmäla"
            onChange={handleFormInfo}
          />
        </label>
      </form>
    </>
  )
}

export default DescriptionView
