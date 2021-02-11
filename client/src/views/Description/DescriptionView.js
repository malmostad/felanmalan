import { useEffect } from 'react'
import { useReport } from '../../contexts/ReportContext'

const DescriptionView = () => {
  const { report, setReport } = useReport()

  const handelDescriptionChange = (e) => {
    setReport((prevReport) => ({ ...prevReport, info: { description: e.target.value } }))
  }

  useEffect(() => {
    console.log('our report', report)
  }, [report])

  return (
    <>
      <form>
        <label>
          Beskrivning
          <textarea
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
