import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  //   PRODUCT_DETAILS_REQUEST,
  //   PRODUCT_DETAILS_SUCCESS,
  //   PRODUCT_DETAILS_FAIL,
  //   PRODUCT_SAVE_REQUEST,
  //   PRODUCT_SAVE_SUCCESS,
  //   PRODUCT_SAVE_FAIL,
  //   PRODUCT_DELETE_REQUEST,
  //   PRODUCT_DELETE_SUCCESS,
  //   PRODUCT_DELETE_FAIL,
} from "../constants/productConstants";
import Axios from "axios";

const listProducts = () => async (dispatch) => {
  // dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:3000/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
export { listProducts };
