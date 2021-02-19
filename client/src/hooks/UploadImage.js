import { useState } from 'react'
import React, { useUpdate } from '../contexts/UpdateContext'
import http from '../http-common'

export const UploadImage = (file, endpoint) => {
  const {
    setUploadProgress,
    uploadProgress,
    imageURI,
    setImageURI,
    uploadStatus,
    setUploadStatus,
    uploading,
    setUploading,
  } = useUpdate()

  const getBase64 = (file, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(file)
  }

  setUploading(true)
  const formData = new FormData()
  formData.append('file', file)
  console.log(formData)
  http
    .post(endpoint, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (ev) => {
        setUploadProgress(Math.round(ev.loaded / ev.total) * 100)
      },
    })
    .then((resp) => {
      // our mocked response will always return true
      // in practice, you would want to use the actual response object
      console.log(resp)
      getBase64(file, (uri) => {
        setImageURI(uri)
      })
    })
    .catch((err) => console.error(err))
}
