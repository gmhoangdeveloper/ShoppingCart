import {
  CART_LIST_ADD,
  CART_LIST_UPDATE,
  CART_LIST_DELETE,
} from "./../constants/cartConstants";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

function cartListReducer(state = initialState, action) {
  // console.log(state);
  var { product, key, quantity } = action;
  var index = -1;
  switch (action.type) {
    case CART_LIST_ADD:
      const sizeProduct = product.size;
      index = findProductInCart(state, product);
      if (index !== -1) {
        console.log("IF", state[index].size, sizeProduct);
        if (state[index].size === product.size) {
          state[index].quantity += product.quantity;
          console.log(
            "product",
            product,
            "productQuantity",
            product.quantity,
            "state[index].quantity",
            state[index].quantity,
            "state[index].quantity += product.quantity;",
            (state[index].quantity += product.quantity),
            "state[index].quantity + product.quantity;",
            state[index].quantity + product.quantity
          );

          localStorage.setItem("CART", JSON.stringify(state));
        }
      } else {
        console.log("Else");
        state.push(product);
        localStorage.setItem("CART", JSON.stringify(state));
      }
      return [...state];
    case CART_LIST_DELETE:
      console.log("CART_LIST_DELETE", action, state);
      state.splice(action.keyProduct, 1);
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case CART_LIST_UPDATE:
      console.log("CART_LIST_UPDATE", action, state);
      if (state[key].quantity < quantity) {
        state[key].quantity += 1;
      } else {
        state[key].quantity -= 1;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id && cart[i].size === product.size) {
        index = i;
        console.log("findProductInCart", index);
        break;
      }
    }
  }
  return index;
};

export { cartListReducer };
