import http from '../http-common'

const upload = (files, onUploadProgress, endpoint) => {
  let formData = new FormData()

  if (files.length === 1) {
    formData.append('file', file)
  } else {
    files.forEach((file) => formData.append('file', file))
  }

  return http.post(`${endpoint}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  })
}

export default {
  upload,
}
