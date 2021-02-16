import { useEffect, useRef } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'

const DescriptionView = () => {
  const descriptionRef = useRef('')
  const { dispatch } = useReport()
  const { setDisabledNext } = useUpdate()

  useEffect(() => {
    if (!descriptionRef.current.value) {
      setDisabledNext(true)
    } else {
      setDisabledNext(false)
    }
  }, [descriptionRef.current.value])

  const handelDescriptionChange = () => {
    dispatch({
      type: 'setDescription',
      field: descriptionRef.current.name,
      payload: descriptionRef.current.value,
    })
  }
  return (
    <>
      <form>
        <label>
          Beskrivning
          <textarea
            ref={descriptionRef}
            type="text"
            name="description"
            placeholder="Beskriv problemet du vill felanmäla"
            onChange={handelDescriptionChange}
          />
        </label>
      </form>
    </>
  )
}

export default DescriptionView
