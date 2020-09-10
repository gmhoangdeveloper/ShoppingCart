import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const PaymentCart = () => {
  //   const dispatch = useDispatch();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(countCart());
  }, []);
  const listproductcart = () => {
    const dataCart = JSON.parse(localStorage.getItem("CART"));
    return dataCart.map((dataproduct, key) => {
      console.log(dataproduct.product.image1);
      return (
        <>
          <Grid
            lg={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid lg={3}>
              <img src={dataproduct.product.image2} style={{ width: "80%" }} />
            </Grid>
            <Grid lg={7}>
              <Typography>{dataproduct.product.title}</Typography>
              <Typography>{dataproduct.product.price}</Typography>
              <Typography></Typography>
            </Grid>
            <Grid lg={2}>
              <IconButton
                aria-label="add to shopping cart"
                style={{ color: "black" }}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Grid>
          </Grid>{" "}
          <Divider />{" "}
        </>
      );
    });
  };
  return (
    <>
      <Navbar></Navbar>
      <Grid
        lg={10}
        style={{ margin: "auto" }}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid lg="7">
          <Typography>My cart</Typography>
          <Divider />
          {listproductcart()}
        </Grid>
        <Grid lg="5">
          Oder Summary
          <TableContainer>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">Subtotal</TableCell>
                  <TableCell align="right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Shipping Vietnam</TableCell>
                  <TableCell align="right">FREE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Total</TableCell>
                  <TableCell align="right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <FormControl>
            <RadioGroup col>
              <FormControlLabel
                value="end1"
                control={<Radio color="primary" />}
                label="Momo"
              />
              <FormControlLabel
                value="end2"
                control={<Radio color="primary" />}
                label="Thanh toán khi nhận hàng"
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: "20px" }}
          >
            Check Out
          </Button>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
};
