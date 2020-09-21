import {
  ACCOUNT_USER_UPDATE,
  ORDER_LIST_CART,
  LOGOUT_ACCOUNT,
} from "./../constants/myaccountConstants";
var data = JSON.parse(localStorage.getItem("Account"));

// const { data } = await axios.get("http://localhost:3000/products");
var accountState = data ? data : [];

function myaccountReducer(state = { account: accountState }, action) {
  const { userordercart, dataUser } = action;
  switch (action.type) {
    case ACCOUNT_USER_UPDATE:
      localStorage.setItem("Account", JSON.stringify([dataUser]));
      return { ...state, account: [dataUser] };
    case ORDER_LIST_CART:
      return { ...state, userordercart };
    case LOGOUT_ACCOUNT:
      localStorage.removeItem("Account");
      window.location.href = "http://localhost:3001/";
      return { ...state };
    default:
      return state;
  }
}
export { myaccountReducer };
