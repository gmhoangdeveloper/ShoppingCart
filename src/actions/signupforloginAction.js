import axios from "axios";
import {
  REGISTRATION_COLSE_ALERT,
  REGISTRATION_FAIL_PASSWORDEMAIL,
  REGISTRATION_SEND_PASSWORDEMAIL,
} from "../constants/signupforloginConstants";
import { ALERT_OPEN_SELECT } from "./../constants/alertConstants";

const registrationEmail = (dataUser) => async (dispatch) => {
  // dispatch({ type: PRODUCT_LIST_REQUEST });
  const selectUser = await axios.get(
    "http://localhost:3000/UserName" + `?email=${dataUser.email}`
  );
  const { data } = selectUser;
  console.log("SELECT", data.length);
  if (data.length === 0) {
    console.log("if");
    const { data } = await axios.post(
      "http://localhost:3000/UserName",
      dataUser
    );
    //   console.log("dataUser", data.password);
    const dataRequestSendEmail = {
      title: data.email,
      description: data.password,
    };
    const hoang = await axios.post(
      "https://caps-node-deploy.herokuapp.com/email",
      dataRequestSendEmail
    );
    console.log("hoang", hoang);
  } else {
    dispatch({ type: ALERT_OPEN_SELECT });
    console.log("SELECT Else userName");
  }
};

const loginEmail = (dataUser) => async (dispatch) => {
  const { data } = await axios.get(
    "http://localhost:3000/UserName" +
      `?email=${dataUser.emaillogin}&password=${dataUser.passwordlogin}`
  );
  console.log("hoang UserName", data);
  if (data.length === 0) {
    dispatch({
      type: REGISTRATION_FAIL_PASSWORDEMAIL,
    });
  } else {
    console.log("dispacth", data);
    dispatch({
      type: REGISTRATION_SEND_PASSWORDEMAIL,
      data,
    });
  }
};
const closeAlert = () => async (dispatch) => {
  dispatch({
    type: REGISTRATION_COLSE_ALERT,
  });
};
export { registrationEmail, loginEmail, closeAlert };
