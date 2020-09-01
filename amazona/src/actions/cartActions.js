import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
//Bị lỗi khi mình add thêm một sản phầm thì nó xóa sản phầm trước
import Cookie from "js-cookie";
const addToCart = (productId, qty) => async (dispatch, getState) => {
  console.log("addToCartVdispatch", dispatch);
  console.log("addToCartVGetState", getState());
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    console.log("iii", cartItems);
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  console.log("removeFromCartVGetState", getState());
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
export { addToCart, removeFromCart };
