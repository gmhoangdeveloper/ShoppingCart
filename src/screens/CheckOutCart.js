import { CardMedia, Container, Typography, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({}));
const CheckOutCart = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //   const classes = useStyles();
  const productList = useSelector((state) => state);
  console.log();
  return (
    <>
      <Navbar />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        lg={10}
        style={{ border: "1px solid red", height: "500px", margin: "auto" }}
      >
        <Grid lg={7} style={{ border: "1px solid red", height: "500px" }}>
          <Typography>Thông tin thanh toán</Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Tên" /> <br></br>
            <TextField id="standard-basic" label="Họ" />
            <br></br>
            <TextField id="standard-basic" label="Địa Chỉ" />
            <br></br>
            <TextField id="standard-basic" label="Tỉnh/ Thành Phố" />
            <br></br>
            <TextField id="standard-basic" label="Số Điện Thoại" />
            <br></br>
            <TextField id="standard-basic" label="Địa CHỉ Email" />
            <br></br>
          </form>
        </Grid>
        <Grid
          lg={4}
          style={{ border: "1px solid red", height: "500px" }}
        ></Grid>
      </Grid>
      {/* <h1>Thanh toán sản phẩm</h1> */}
      <Footer />
    </>
  );
};

export default CheckOutCart;
