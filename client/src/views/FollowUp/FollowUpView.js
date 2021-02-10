import { Button } from '../../components/buttons/Buttons'
import axios from 'axios'

const baseUrl = 'test'

const FollowUpView = () => {
  const samplePost = async () => {
    const result = await axios.post(baseUrl + '/posts', {
      sampleData: 'naezassp',
    })
    console.log(result)
  }

  return (
    <>
      <h1>Follow up -</h1>
      <h4>Den hjälper oss hålla vår vackra stad iordning</h4>
      <h4>Ärende: </h4>
    </>
  )
}

export default FollowUpView
