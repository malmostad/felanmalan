import { useEffect, useRef } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'

const DescriptionView = () => {
  const descriptionRef = useRef('')
  const { handelSetFormInfo, formState } = useReport()
  const { setDisabledNext, setCurrentViewHeading, currentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading('Beskriv Problemet')
  }, [currentViewHeading])

  useEffect(() => {
    if (!descriptionRef.current.value) {
      setDisabledNext(true)
    } else {
      setDisabledNext(false)
    }
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
