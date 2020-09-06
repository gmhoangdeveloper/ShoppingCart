import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import DialogCartItem from "./DialogCartItem";
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
});
const CartItem = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [childOpen, setchildOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClick = (value) => {
    console.log(value)
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              image="https://static.wixstatic.com/media/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.jpg/v1/fill/w_277,h_208,al_c,q_80,usm_0.66_1.00_0.01/baac51_ae96d298952242c2bb5cce4abdcab7a9~mv2_d_2000_1500_s_2.webp"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Im a Product
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                $2.25
              </Typography>
              <Button variant="outlined" fullWidth={true} >
                Add To Card
                <DialogCartItem addTocar="true" isAgent={handleClick} test="hoang" />
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default CartItem;
