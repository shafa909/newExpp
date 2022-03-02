import { useForm } from "react-hook-form";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import { TextField, Box, Checkbox, createTheme } from "@mui/material";

import { StyledForm } from "./styles";
import LoginButtons from "../../buttons/loginButtons";

const FormPropsTextFields = ({ href, props }) => {
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

  const theme = createTheme({
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "#4285f4",
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "standard",
        },
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <Box component="div" noValidate autoComplete="off">
          <TextField
            id="email"
            label="Email *"
            type="email"
            defaultValue=""
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
            variant="standard"
            fullWidth
            color={theme.components.MuiInputLabel.styleOverrides.root.color}
            sx={{
              marginTop: "24px",
              height: "75px",
            }}
          />

          <br />

          <TextField
            id="password"
            label="Password *"
            type="password"
            defaultValue=""
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
            variant="standard"
            fullWidth
            color={theme.components.MuiInputLabel.styleOverrides.root.color}
            sx={{
              marginBottom: !!errors.password ? 0 : "23px",

              marginTop: "10px",
              maxHeight: "75px",
            }}
          />
          <span id="under-login-form-text">
            <Checkbox size="small" sx={{ padding: 0 }} />
            <span id="remember">Remember Me</span>
            <a href={href} id="forgot">
              Forgot Password?
            </a>
          </span>
        </Box>
      </StyledForm>
      <LoginButtons />
    </form>
  );
};

export default FormPropsTextFields;
