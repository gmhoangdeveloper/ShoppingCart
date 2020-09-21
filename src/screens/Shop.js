import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Slider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import GridImage from "../components/GridImage";
import Navbar from "../components/Navbar";
import DialogCartItem from "../components/DialogCartItem";

import CustomizedSnackbars from "../components/Alert";
const useStyles = makeStyles({
  menuNavbar: {
    backgroundImage:
      "url(https://static.wixstatic.com/media/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.jpg/v1/fill/w_1189,h_660,al_tl,q_85,usm_0.66_1.00_0.01/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.webp)",
    width: "100%",
    height: "500px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: " 80px",
    fontWeight: "bold",
  },
  headerText2: {
    color: "white",
    textAlign: "center",
  },
  root: { flexGrow: 1 },
  buttonHover: {
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    textAlign: "center",
    border: "1px solid white",
    color: "white",
    fontWeight: "none",
  },
});
const Shop = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const productList = useSelector((state) => state.productList);
  // console.log("productList", productList);
  const { products, loading, error } = productList;
  // console.log("products", products);
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  let maxPrice = Math.max(...products.map((products) => products.price));
  let minPrice = Math.min(...products.map((products) => products.price));
  const [value, setValue] = React.useState([minPrice, maxPrice]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("Three", maxPrice, minPrice, value);
  const fillter = products.filter(
    (products) => products.price >= minPrice && products.price <= maxPrice
  );
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" className={classes.menuNavbar}>
        <Box>
          <Typography className={classes.headerText}>ALWAYS BE</Typography>
          <Typography className={classes.headerText}>ORIGINAL</Typography>
          <Typography className={classes.headerText2}>
            NEW ARRIVALS ARE HERE
          </Typography>
          <Typography align="center">
            <Button className={classes.buttonHover}>
              <span> Shop Now</span>
            </Button>
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" className={classes.root}>
        <Typography align="center">LIMITED EDITION COLLECTION</Typography>
        <Box m={5} style={{ width: "300px" }}>
          <Typography id="range-slider" gutterBottom>
            Temperature range
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            min={minPrice}
            max={maxPrice}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            // getAriaValueText={valuetext}
          />
        </Box>
        <Grid container direction="row" justify="flex-start" spacing="3">
          {fillter.map((products, key) => (
            <CartItem productsItem={products} key={key} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Shop;
