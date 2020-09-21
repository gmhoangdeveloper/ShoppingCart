import {
  ALERT_OPEN_SELECT,
  ALERT_CLOSE_SELECT,
} from "./../constants/alertConstants";
function alertListReducer(state = { loading: false }, action) {
  switch (action.type) {
    case ALERT_OPEN_SELECT:
      return { ...state, loading: true };
    case ALERT_CLOSE_SELECT:
      return { ...state, loading: false };
    default:
      return state;
  }
}
export { alertListReducer };
