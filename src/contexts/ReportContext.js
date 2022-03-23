import { useContext, createContext, useReducer } from "react";

export const ReportContext = createContext();
export const useReport = () => useContext(ReportContext);

const initialReportData = {
  images: [],
  latitude: undefined,
  longitude: undefined,
  description: "",
  address: "",
  name: "",
  email: "",
  phone: "",
  enable_tracking: false,
};

export const ReportProvider = ({ children }) => {
  const formReducer = (formState, { type, field, payload }) => {
    switch (type) {
      case "setFormInfo":
        return {
          ...formState,
          [field]: payload,
        };
      case "addImage":
        return {
          ...formState,
          images: [...formState.images, payload],
        };
      case "removeImage":
        const { images } = formState;
        return {
          ...formState,
          images: images.filter((image) => image !== payload),
        };
      case "clearFormInfo":
        return { ...initialReportData };
      default:
        return formState;
    }
  };
  const [formState, dispatch] = useReducer(formReducer, initialReportData);

  const handelSetFormInfo = (name, payload) => {
    dispatch({
      type: "setFormInfo",
      field: name,
      payload,
    });
  };

  const reportValues = {
    formState,
    handelSetFormInfo,
    dispatch,
  };

  return (
    <ReportContext.Provider value={reportValues}>
      {children}
    </ReportContext.Provider>
  );
};
