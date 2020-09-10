import {
  Grid,
  GridList,
  GridListTile,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarts, listCarts, updateCarts } from "../actions/cartActions";
import CheckOutCart from "../screens/CheckOutCart";
const useStyles = makeStyles((theme) => ({
  drawer: {
    // width: "374px",
    width: "500px",
  },
  headerCart: {
    backgroundColor: "black",
    color: "white",

    padding: "20px",
  },

  id_productTxt: {
    // border: "1px solid  blue",
    width: "70px",
    padding: "0",
    marginBottom: "50px",
  },
}));
export default function CartDrawer(props) {
  // console.log("HoangCartDrawer");
  // console.log(props, "OneHoangCartDrawer");

  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const [quantity, setQuantity] = useState(cartList);

  const handleChangeQuantityDrawer = (key, quantity) => (event) => {
    // console.log("key,quantity", key, quantity);
    dispatch(updateCarts(key, Number(event.target.value)));
  };
  const deleteProductCart = (keyProduct) => {
    dispatch(deleteCarts(keyProduct));
  };
  if (props.openCartDrawe) {
    setState({ ...state, right: true });
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    if (open) {
      dispatch(listCarts(props.addToCart));
    }
  };
  const valuesss = () => {
    if (cartList !== null) {
      return cartList.map((text, index) => {
        if (text !== undefined) {
          return (
            <Grid className={classes.drawer} lg={12} rows={3} spacing={2}>
              <GridList cellHeight={80} cols={4}>
                <GridListTile cols={1}>
                  <img src={text.image2} style={{ width: "80%" }} />
                </GridListTile>
                <GridListTile cols={2}>
                  <Typography component="p">
                    {text.title}
                    {text.size}
                  </Typography>
                  <Typography component="p">
                    PRICE:{text.price} Quantity:{text.quantity}
                  </Typography>
                  <TextField
                    id="outlined-number"
                    className={classes.id_productTxt}
                    label="Number"
                    type="number"
                    onChange={handleChangeQuantityDrawer(index, text.quantity)}
                    value={text.quantity}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </GridListTile>
                <GridListTile cols={1}>
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => deleteProductCart(index)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </GridListTile>
              </GridList>
            </Grid>
          );
        }
      });
    }
  };
  const subtotalCart = () => {
    if (state.right) {
      // console.log("subtotalCart", cartList.length);
      var subtotal = 0;
      var cartListV2 = [...cartList];
      console.log("cartListV2....", cartListV2.length);
      var tongtien = 0;
      for (var i = 0; i < cartListV2.length; i++) {
        subtotal = cartListV2[i].quantity *= cartListV2[i].price;
        tongtien += subtotal;
        // console.log(
        //   `cartListV2 Not ...........${i}`,
        //   subtotal,
        //   "Tong tièn",
        //   tongtien
        // );
      }
      // console.log("tongtien", tongtien);
    }
    // <CheckOutCart sumCart={subtotal} />;
    return (subtotal = tongtien);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={toggleDrawer("right", true)}
        fullWidth={true}
      >
        Add to Card
      </Button>
      {/* {valuesss()}sdfasdfasd */}
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        style={{ width: "300px !important" }}
      >
        <Grid
          className={classes.headerCart}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <IconButton
            aria-label="add to shopping cart"
            style={{ color: "white" }}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Typography>CART</Typography>
          <Typography></Typography>
        </Grid>
        <Grid xs={9} style={{ margin: "30px auto auto auto" }}>
          {valuesss()}
          <Grid>
            <Typography>Subtotal</Typography>
            <Typography>${subtotalCart()}</Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "black", color: "white" }}
              fullWidth={true}
            >
              View Cart
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
