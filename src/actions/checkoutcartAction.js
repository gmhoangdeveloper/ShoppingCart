import axios from "axios";
import {
  ORDER_DETAIL,
  PAYMENTCART_LIST_MOMO,
  PAYMENTCART_LIST_PAYMENTONDELIVERY,
  PAYMENTCART_UPDATE_MOMO_STATUS,
} from "../constants/checkoutcartConstants";

const paymentonDelivery = (subtotalCart) => async (dispatch) => {
  console.log("paymentonDeliverysubtotalCart", subtotalCart);

  const dataResponsePaymentCart = await axios.post(
    "http://localhost:3000/PaymentCart",
    subtotalCart
  );
  dispatch({
    type: PAYMENTCART_LIST_PAYMENTONDELIVERY,
    dataResponsePaymentCart,
  });
  // console.log();
};
const paymentCartMomo = (dataRequestMomo, subtotalCart) => async (dispatch) => {
  console.log("object", subtotalCart);
  const dataResponseMoMo = await axios.post(
    "https://test-payment.momo.vn/gw_payment/transactionProcessor",
    dataRequestMomo
  );
  console.log("dataAction", dataResponseMoMo, "dd");
  if (dataResponseMoMo.data.message === "Success") {
    const dataResponsePaymentCart = await axios.post(
      "http://localhost:3000/PaymentCart",
      subtotalCart
    );
    dispatch({
      type: PAYMENTCART_LIST_MOMO,
      dataResponseMoMo,
      dataResponsePaymentCart,
    });
    console.log();
  }
};
const oderDetail = (orderid, updateStatus) => async (dispatch) => {
  // ORDER_DETAIL
  // console.log("DELL id", orderid);
  const dataoderDetail = await axios.get(
    "http://localhost:3000/PaymentCart/" + orderid
  );
  if (updateStatus) {
    const update = { ...dataoderDetail.data, status: updateStatus };
    const dataoderDetailupdataStatus = await axios.put(
      "http://localhost:3000/PaymentCart/" + orderid,
      update
    );
    dispatch({
      type: ORDER_DETAIL,
      dataoderDetail: dataoderDetailupdataStatus,
    });
    console.log("dataoderDetailupdataStatus", dataoderDetailupdataStatus);
  } else {
    dispatch({ type: ORDER_DETAIL, dataoderDetail });
    console.log("dataoderDetail", dataoderDetail);
  }

  console.log("dataoderDetail", dataoderDetail);
  // dispatch({ type: ORDER_DETAIL, dataoderDetail });
};

export { paymentCartMomo, oderDetail, paymentonDelivery };
