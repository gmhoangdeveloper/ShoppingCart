import { ALERT_OPEN_SELECT,ALERT_CLOSE_SELECT } from "../constants/alertConstants";

const alertopenSelect = () => async (dispatch) => {
  dispatch({ type: ALERT_OPEN_SELECT });
};
const alertcloseSelect = () => async (dispatch) => {
  dispatch({ type: ALERT_CLOSE_SELECT });
};
export { alertopenSelect,alertcloseSelect };
