import {
  Button,
  CardMedia,
  Container,
  Typography,
  FormControl,
  NativeSelect,
  FormHelperText,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Snackbar,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const ViewDetailsScreen = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const countNumberParams = props.match.params.id - 1;
  const productViewDetail = productList.products[countNumberParams];
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [Cartdata, setCartdata] = useState();
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  if (productViewDetail !== undefined) {
    if (Cartdata === undefined) {
      setCartdata(productViewDetail);
    }
  }
  const testsubmit = (va) => {
    var e = document.getElementById("detailProductSize").innerHTML;
    setOpen(true);
  };
  const handleChangeSize = (event, value) => {
    setSize(event.target.value);
    const new_objSize = {
      ...Cartdata,
      quantity: 1,
      size: `${event.target.value}`,
    };
    setCartdata(new_objSize);
  };
  const handleChangeQuantity = (event, value) => {
    setQuantity(event.target.value);
    const new_objQuantity = {
      ...Cartdata,
      quantity: Number(event.target.value),
    };
    setCartdata(new_objQuantity);
  };
  return (
    <>
      <Navbar />
      <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={false}
      >
        <Alert severity="error">This is an error message!</Alert>
      </Snackbar>
      <Container maxWidth="lg">
        {productViewDetail && (
          <Grid container xs={12} spacing={1} style={{ margin: "20px" }}>
            <Grid xs={6}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="90%"
                image={productViewDetail.image1}
                title="Contemplative Reptile"
              />
              <Typography>{productViewDetail.description}</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography variant="h5" gutterBottom>
                {productViewDetail.title}
              </Typography>
              <Typography gutterBottom>SKU: {productViewDetail.id}</Typography>
              <Typography gutterBottom>$ {productViewDetail.price}</Typography>
              <Typography gutterBottom>
                SIZE: {productViewDetail.size}
              </Typography>
              <Typography gutterBottom>
                Quantity: {productViewDetail.quantity}
              </Typography>
              <FormControl className={classes.formControl}>
                <Select
                  value={size}
                  onChange={handleChangeSize}
                  displayEmpty
                  id="detailProductSize"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={"Small"}>Small</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Large"}>Large</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
              <Typography>Quantity</Typography>
              <TextField
                onKeyDown={handleChangeQuantity}
                onChange={handleChangeQuantity}
                label="Number"
                value={quantity}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                // InputProps={{ inputProps: { min: 1, max: 10 } }}
                variant="outlined"
              />
              <Grid
                style={{ margin: "10px 0 10px" }}
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid
                  lg={9}
             
                >
                  {/* {console.log("Cartdata View type Of", Cartdata,typeof quantity)} */}
                  <CartDrawer addToCart={Cartdata} quantity={quantity} />
                </Grid>
                <Grid lg={2}>
                  <Button variant="outlined" onClick={testsubmit}>
                    <FavoriteBorderIcon />
                  </Button>
                </Grid>
              </Grid>
              <Button variant="outlined" fullWidth={true}>
                Buy now
              </Button>
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ViewDetailsScreen;
