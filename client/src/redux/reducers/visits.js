import { PAGE_VISIT } from "../action-types";

const initialState = {
  map: 0,
  info: 0,
  contact: 0
};
const visitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_VISIT:
      const { page } = action;
      if (page === "MAP") {
        const map = state.map + 1;
        return { ...state, map };
      }
      if (page === "INFO") {
        const info = state.info + 1;
        return { ...state, info };
      }
      if (page === "CONTACT") {
        const contact = state.contact + 1;
        return { ...state, contact };
      }
      return state;
    default:
      return state;
  }
};

export default visitsReducer;
