import { useForm } from "react-hook-form";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, TextField, Box, Checkbox, createTheme } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import './loginform.css'


const LoginForm = ({ href, props }) => {
  const navigate = useNavigate();
  const [createdAccount, setCreatedAccount] = useState(undefined);

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Invalid format")
        .required("This is a required field")
        .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}"),
      password: yup.string().required("This is a required field"),
    })
    .required();

  const handleForm = (data) => {
    axios
      .post("https://app.exceptionly.com/api/auth/login", { ...data })
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.auth_token);
        navigate("/welcome");
        props.setAuthentication(true);
      })
      .catch((res) => {
        setCreatedAccount(false);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data, evt) => {
    evt.preventDefault();
    console.log(data);
    reset();
    handleForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form-container">
        <TextField
          id="email"
          label="Email *"
          type="email"
          defaultValue=""
          className="login-text-fields"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
          variant="standard"
          fullWidth
        />
        <TextField
          id="password"
          label="Password *"
          type="password"
          defaultValue=""
          className="login-text-fields"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
          variant="standard"
          fullWidth
        />
        <span className="under-login-form-text">
          <span className="remember">
            <Checkbox size="small" sx={{
              padding: '0',
              paddingRight: '8px',
              bottom: '1px'
            }} />
            Remember Me
          </span>
          <a href="/passwordRecovery" className="forgot">
            Forgot Password?
          </a>
        </span>
        <Button
          id="signin"
          variant="contained"
          disableElevation
          sx={{ background: "#4285F4", marginTop: "27px" }}
          type="submit"
        >
          SIGN IN
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
