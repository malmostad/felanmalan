import { useEffect } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'

const DescriptionView = () => {
  const { report, setReport } = useReport()
  const { setDisabledNext } = useUpdate()

  useEffect(() => {
    if (report.info.description.length > 0) {
      setDisabledNext(false)
      return
    }
    setDisabledNext(true)
  }, [report])

  const handelDescriptionChange = (e) => {
    setReport((prevReport) => ({ ...prevReport, info: { description: e.target.value } }))
  }
  return (
    <>
      <form>
        <label>
          Beskrivning
          <textarea
            type="text"
            name="description"
            value={report.info.description}
            placeholder="Beskriv problemet du vill felanmäla"
            onChange={handelDescriptionChange}
          />
        </label>
      </form>
    </>
  )
}

export default DescriptionView
