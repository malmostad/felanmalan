import { useEffect, useContext } from 'react'
import { useReport } from '../../contexts/ReportContext'
import { NavigationContext } from '../../contexts/NavigationContext'

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
      <form>
        <label>
          Beskrivning
          <textarea
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
