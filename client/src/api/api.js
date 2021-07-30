import http from "../http-common";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PHOTOS_ENDPOINT = process.env.REACT_APP_API_POST_PHOTOS_ENDPOINT;
const REPORTS_ENDPOINT = process.env.REACT_APP_API_POST_REPORTS_ENDPOINT;

export const postImages = async (endpoint, file, callback) => {
  let responseData = {
    data: null,
  };

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await http.post(endpoint, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: callback,
    });
    if (response) {
      const UploadedImageId = await response.data.id;
      responseData.data = UploadedImageId;
    }
  } catch (error) {
    throw new Error(error);
  }

  return responseData;
};

export const postReport = async (data) => {
  try {
    const response = await http.post(BASE_URL + REPORTS_ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
      },
      report: data,
    });
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchAddressMapBoxAPI = async (viewport) => {
  try {
    const response = await http.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${viewport.longitude},${viewport.latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
    );
    return {
      address: response.data.features[0].text,
      number: response.data.features[0].address,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSearchResultMapBoxApi = async (address, maxBounds) => {
  try {
    const response = await http.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&bbox=${maxBounds.join(
        ","
      )}&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
    );
    return response.data.features;
  } catch (error) {
    throw new Error(error);
  }
};
