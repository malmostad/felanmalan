import { useState, useEffect } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
const Error = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const { errorStatusCode } = useUpdate()

  useEffect(() => {
    // check the status code if it's a 400-499 or 500-599
    switch (true) {
      case errorStatusCode < 499:
        setErrorMsg('something went wrong, please try agin')
        break
      case errorStatusCode < 599:
        setErrorMsg('well that was unexpected, the server could not complete your request')
        break
      default:
        return setErrorMsg('unexpected error')
    }
  }, [])

  return (
    <div>
      <h1>Oops!</h1>
      <p>
        {errorStatusCode} {errorMsg}
      </p>
    </div>
  )
}

export default Error
