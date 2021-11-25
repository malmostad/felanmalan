import http from "../http-common";

const PHOTOS_ENDPOINT = process.env.REACT_APP_API_POST_PHOTOS_ENDPOINT;
const REPORTS_ENDPOINT = process.env.REACT_APP_API_POST_REPORTS_ENDPOINT;

export const postImages = async (file, onUploadProgress) => {
  let responseData = {
    imageId: null,
  };

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await http.post(PHOTOS_ENDPOINT, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress,
    });
    if (response) {
      const imageId = await response.data.tempId;
      responseData.imageId = imageId;
    }
  } catch (error) {
    throw new Error(error);
  }

  return responseData;
};

export const postReport = async (data) => {
  const SMS = 1;
  const EMAIL = 2;

  const payload = {
    IssueRegistrator: data.name,
    IssueDescription: data.description,
    IssueEasting: data.longitude,
    IssueNorthing: data.latitude,
    IssueDocuments: data.images,
    IssueRegisterContactEmail: data.email,
    IssueRegisterContactPhone: data.phone,
  };
  if (data.enable_tracking && data.email.length > 0) {
    payload.IssueRegistratorFeedbackType = EMAIL;
  } else if (data.enable_tracking && data.phone.length > 0) {
    payload.IssueRegistratorFeedbackType = SMS;
  }

  try {
    const response = await http.post(REPORTS_ENDPOINT, {
      ...payload,
    });
    if (response.status === 200) {
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
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address,poi&bbox=${maxBounds.join(
        ","
      )}&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
    );
    return response.data.features;
  } catch (error) {
    throw new Error(error);
  }
};
