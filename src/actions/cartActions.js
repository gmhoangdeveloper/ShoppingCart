import axios from "axios";
import {
  CART_LIST_UPDATE,
  CART_LIST_ADD,
  CART_LIST_DELETE,
} from "../constants/cartConstants";
import Axios from "axios";

const listCarts = (product) => async (dispatch) => {
  dispatch({ type: CART_LIST_ADD, product });
  // console.log("ACTION", product);
};
const deleteCarts = (keyProduct) => async (dispatch) => {
  dispatch({ type: CART_LIST_DELETE, keyProduct });
};
const updateCarts = (key, quantity) => async (dispatch) => {
  dispatch({ type: CART_LIST_UPDATE, key, quantity });
};
export { listCarts, deleteCarts, updateCarts };
