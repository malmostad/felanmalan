import { REPORT_ADD } from "./action-types";

export const reportAdd = step => ({
  type: REPORT_ADD,
  payload: step
});
