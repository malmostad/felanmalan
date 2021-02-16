import { useRef } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'

const DescriptionView = () => {
  const descriptionRef = useRef(null)
  const { dispatch } = useReport()
  const { setDisabledNext } = useUpdate()
  const handelDescriptionChange = () => {
    dispatch({
      type: 'setDescription',
      field: descriptionRef.current.name,
      payload: descriptionRef.current.value,
    })
    console.log('text', descriptionRef.current.value)
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
