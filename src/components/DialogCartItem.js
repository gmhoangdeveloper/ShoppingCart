import {
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DialogCartItem(props) {
  const classes = useStyles();
  console.log("dataProductDialog", props);
  const { clickOpenDialog } = props;
  const {
    id,
    image1,
    image2,
    price,
    quantity,
    size,
    status,
    title,
    description,
  } = props.dataProductDialog;
  console.log("Get Props", props);
  useEffect(() => {
    // props.history.push("/cart/" + props.match.params.id );
    return () => {};
  }, []);
  const [open, setOpen] = useState(clickOpenDialog);
  // console.log("Get Props open", open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" fullWidth={true} onClick={handleClickOpen}>
        Add to Cart
      </Button>
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Grid container lg={12}>
            <Grid lg={6}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="100%"
                width="100%"
                image={image2}
                title="Contemplative Reptile"
              ></CardMedia>
            </Grid>
            <Grid lg={6}>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h6">${price}</Typography>
              <Typography variant="h6">SKU: {id}</Typography>
              <Typography>Size {size}</Typography>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  className={classes.selectEmpty}
                  name="age"
                  inputProps={{ "aria-label": "age" }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value={"Small"}>Small</option>
                  <option value={"Medium"}>Medium</option>
                  <option value={"Large"}>Large</option>
                </NativeSelect>
                <FormHelperText>Placeholder</FormHelperText>
              </FormControl>
              <Typography>Quantity</Typography>
              <TextField
                // id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <br></br>
              <Link to={`/viewdetail/${id}`}>View More Details{id}</Link>

              <CartDrawer addToCart={props.dataProductDialog} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
