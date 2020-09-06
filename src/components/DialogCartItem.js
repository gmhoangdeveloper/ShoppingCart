import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  Grid,
  makeStyles,
  GridList,
  GridListTile,
  Typography,
  IconButton,
  Box,
  Container,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  DialogContent,
  CardMedia,
  TextField,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { useEffect } from "react";

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
  const { isAgent } = props;
  // const child =props.handleClick("true");
  console.log("Get Props 33", props);
  useEffect(() => {
    console.log("Get Props", isAgent);
    return () => {};
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
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
                image="https://static.wixstatic.com/media/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.jpg/v1/fill/w_277,h_208,al_c,q_80,usm_0.66_1.00_0.01/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.webp"
                title="Contemplative Reptile"
              ></CardMedia>
            </Grid>
            <Grid lg={6}>
              <Typography>Im Product</Typography>
              <Typography>$25.00</Typography>
              <Typography>SKU: 0001</Typography>
              <Typography>Size</Typography>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  className={classes.selectEmpty}
                  name="age"
                  inputProps={{ "aria-label": "age" }}
                >
                  <option value="" disabled>
                    Placeholder
                  </option>
                  <option value={10}>Small</option>
                  <option value={20}>Medium</option>
                  <option value={30}>Large</option>
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
              <Button variant="contained" fullWidth={true} color="secondary">
                Secondary
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
