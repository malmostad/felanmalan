import {useState, useEffect} from 'react'

const Error = (errorStatusCode) => {

    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
         // check the statuscode
        if(errorStatusCode.errorCode >= 400 && errorStatusCode.errorCode < 500){
            setErrorMsg('fuck this')
         } 
    }, [])
    
   


    return (
        <div>
            {errorMsg}
        </div>
    )
}

export default Error
