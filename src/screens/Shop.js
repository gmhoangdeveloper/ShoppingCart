import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" className={classes.root}>
        <Typography align="center">NEW ARRIVALS</Typography>
        <Grid container direction="row" justify="flex-start" spacing="3">
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </Grid>
        <Box m={5}>
          <Typography align="center">
            <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
              <Route>
                {({ location }) => {
                  const query = new URLSearchParams(location.search);
                  const page = parseInt(query.get("page") || "1", 10);
                  return (
                    <Pagination
                      page={page}
                      count={10}
                      renderItem={(item) => (
                        <PaginationItem
                          component={Link}
                          to={`/inbox${
                            item.page === 1 ? "" : `?page=${item.page}`
                          }`}
                          {...item}
                        />
                      )}
                    />
                  );
                }}
              </Route>
            </MemoryRouter>
          </Typography>
        </Box>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Shop;
