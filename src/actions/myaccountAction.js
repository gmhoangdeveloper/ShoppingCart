import axios from "axios";
import {
  ACCOUNT_USER_UPDATE,
  LOGOUT_ACCOUNT,
  ORDER_LIST_CART,
} from "../constants/myaccountConstants";

const AccountUserEdit = (dataUser) => async (dispatch) => {
  const { data } = await axios.put(
    "http://localhost:3000/UserName/" + dataUser.id,
    dataUser
  );
  dispatch({
    type: ACCOUNT_USER_UPDATE,
    dataUser: data,
  });
};
const UserOrderCart = (email, Pagination) => async (dispatch) => {
  const userordercart = await axios.get(
    "http://localhost:3000/paymentCart?email=" +
      email +
      `&_page=${Pagination}&_limit=5` +
      "&_sort=date&_order=desc"
  );
  dispatch({
    type: ORDER_LIST_CART,
    userordercart: userordercart,
  });
};
const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_ACCOUNT,
  });
};
export { AccountUserEdit, UserOrderCart, logout };
