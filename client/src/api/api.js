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

export const fetchAddressMapBoxAPI = async (viewport) => {
  try {
    const response = await http.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${viewport.longitude},${viewport.latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
    )
    return {
      address: response.data.features[0].text,
      number: response.data.features[0].address,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchSearchResultMapBoxApi = async (address) => {
  try {
    const response = await http.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?bbox=12.855952171065837,55.49066310369751,13.17594041283428,55.6585718499375&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
    )
    console.log(response.data.features)
    return response.data.features
  } catch (error) {
    throw new Error(error)
  }
}
