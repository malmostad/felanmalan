import { useEffect, useRef } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'

const DescriptionView = () => {
  const descriptionRef = useRef('')
  const { handelSetFormInfo, formState } = useReport()
  const { setDisabledNext } = useUpdate()

  useEffect(() => {
    if (!descriptionRef.current.value) {
      setDisabledNext(true)
    } else {
      setDisabledNext(false)
    }
  }, [descriptionRef.current.value])

  return (
    <>
      <form>
        <label>
          Beskrivning
          <textarea
            ref={descriptionRef}
            type="text"
            name="description"
            defaultValue={formState.description}
            placeholder="Beskriv problemet du vill felanmäla"
            onChange={() => handelSetFormInfo(descriptionRef, descriptionRef.current.value)}
          />
        </label>
      </form>
    </>
  )
}

export default DescriptionView
