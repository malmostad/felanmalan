import http from '../http-common'

export const postImages = async (endpoint, file, callback) => {
  // const getBase64 = (photo, callback) => {
  //   const reader = new FileReader()
  //   reader.addEventListener('load', () => callback(reader.result))
  //   reader.readAsDataURL(file)
  // }

  let responseData = {
    data: null,
  }

  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await http.post(endpoint, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: callback,
    })
    if (response) {
      const UploadedImageId = await response.data.id
      responseData.data = UploadedImageId
    }
  } catch (error) {
    throw new Error(error)
  }

  return responseData
}

export const postReport = async (endpoint, data) => {
  try {
    const response = await http.post(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
      report: data,
    })
    if (response.status === 201) {
      return response
    }
  } catch (error) {
    throw new Error(error)
  }
}
