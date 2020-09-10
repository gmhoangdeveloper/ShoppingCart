import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";
import { cartListReducer } from "./reducers/cartReducers";
// const cartItems = Cookie.getJSON("cartItems") || [];
// const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  cartList: cartListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
// Store chứa các state cũ và reduc xử lý dữ liệu
// combineReducers chứa các phương thức xử lý các state cũ
