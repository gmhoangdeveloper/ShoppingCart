import {
  PAYMENTCART_LIST_REQUEST,
  PAYMENTCART_LIST_ADD,
  PAYMENTCART_LIST_MOMO,
  PAYMENTCART_UPDATE_MOMO_STATUS,
  PAYMENTCART_LIST_PAYMENTONDELIVERY,
  ORDER_DETAIL,
} from "../constants/checkoutcartConstants";
var initialState = [];

function paymentCartReducer(
  state = { orderDetail: {}, statuPayment: false },
  action
) {
  const { dataResponseMoMo, dataResponsePaymentCart, dataoderDetail } = action;
  switch (action.type) {
    case PAYMENTCART_LIST_REQUEST:
      return { loading: true };
    case PAYMENTCART_LIST_MOMO:
      localStorage.removeItem("CART");
      window.location.href = dataResponseMoMo.data.payUrl;
      return { loading: false, data: dataResponsePaymentCart.data };
    case PAYMENTCART_LIST_PAYMENTONDELIVERY:
      localStorage.removeItem("CART");
      window.location.href = `http://localhost:3001/orderdetailsscreen/${
        dataResponsePaymentCart.data.id +
        "/" +
        dataResponsePaymentCart.data.date
      }`;
      return { ...state };
    case ORDER_DETAIL:
      console.log("ORDER_DETAIL", dataoderDetail);
      return { orderDetail: dataoderDetail.data };
    default:
      return state;
  }
}

export { paymentCartReducer };
