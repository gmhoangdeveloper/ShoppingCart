import {
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationEmail, loginEmail } from "../actions/signupforloginAction";
import CustomizedSnackbars from "./Alert";

function DialogSignInLogin(props) {
  const dispatch = useDispatch();
  const signupforlogin = useSelector((state) => state.signupforlogin);
  const alertReducer = useSelector((state) => state.alertReducer);
  const [emailRegistration, setemailRegistration] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    avatar: "",
    dateofbirth: 0,
  });
  function randomPassword(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const handleChangeRegistration = (e) => {
    const { name, value } = e.target;
    setemailRegistration((prevState) => ({
      ...prevState,
      [name]: value,
      password: randomPassword(10),
    }));
  };
  const [login, setlogin] = useState({
    emaillogin: "",
    passwordlogin: "",
  });
  const submitregistration = () => {
    console.log(emailRegistration);
    dispatch(registrationEmail(emailRegistration));
  };
  //   Login

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setlogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitlogin = () => {
    // console.log(login, "Login");
    dispatch(loginEmail(login));
  };

  return (
    <DialogContent>
      <CustomizedSnackbars alertOpenandClose={alertReducer.loading}>
        Tài khoản email đã được đăng ký
      </CustomizedSnackbars>
      <Grid container lg={12}>
        <Grid item lg={6}>
          <Typography variant="h6" color="initial">
            Đăng Nhập
          </Typography>
          <Typography>Tên tài khoản hoặc địa chỉ email *</Typography>
          <TextField
            required
            label="UserName or Email"
            name="emaillogin"
            onChange={handleChangelogin}
          />
          <Typography>Mật khẩu *</Typography>
          <TextField
            label="Password"
            type="password"
            name="passwordlogin"
            autoComplete="current-password"
            onChange={handleChangelogin}
          />
          <Typography>Login with your Social ID</Typography>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>{" "}
          Facebook
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          Google
          <RadioGroup
            aria-label="gender"
            name="gender1"
            // value={value}
            // onChange={handleChange}
          >
            <FormControlLabel
              // value="female"
              control={<Radio />}
              label="Ghi Nhớ Đăng Nhập"
            />
          </RadioGroup>
          <Button variant="contained" color="primary" onClick={submitlogin}>
            Đăng nhập
          </Button>
          <Typography>
            <Link>Quên Mật Khẩu</Link>
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="h6" color="initial">
            Đăng ký
          </Typography>
          <Typography>Địa Chỉ Email</Typography>
          <TextField
            required
            id="standard-required"
            label="Email"
            name="email"
            onChange={handleChangeRegistration}
          />
          <Typography>
            Một mật khẩu sẽ được gửi đến địa chỉ email của bạn.
          </Typography>
          <Typography>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <Link>chính sách riêng tư</Link>.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={submitregistration}
          >
            Đăng ký
          </Button>
        </Grid>
      </Grid>
    </DialogContent>
  );
}

export default DialogSignInLogin;
