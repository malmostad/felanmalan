const Error = ({ errorMessage, statusCode }) => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>
        {statusCode} {errorMessage}
      </p>
    </div>
  )
}

export default Error
