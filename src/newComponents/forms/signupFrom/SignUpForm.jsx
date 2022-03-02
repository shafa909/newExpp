import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import './signupfrom.css'

import {
  TextField,
  Button,
  Tooltip,
} from "@mui/material";



const title =
  "Must contain 8 characters, at least 1 uppercase, 1 lowercase, a number and 1 special character";

const SignUpForm = ({ classes }) => {
  const navigate = useNavigate();
  const [createdAccount, setCreatedAccount] = useState(undefined);

  const schema = yup
    .object({
      firstName: yup.string().required("This is a required field"),
      lastName: yup.string().required("This is a required field"),
      email: yup
        .string()
        .email("Invalid format")
        .required("This is a required field")
        .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}"),
      retypeEmail: yup
        .string()
        .email("Invalid format")
        .required("This is a required field")
        .oneOf([yup.ref("email"), null], "Emails must match"),
      password: yup
        .string()
        .required("This is a required field")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "It must be a strong password"
        ),
      retypePassword: yup
        .string()
        .required("This is a required field")
        .oneOf([yup.ref("password"), null], "It does not comply"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleForm = (user) => {
    axios
      .post("http://api.exceptionly.com/auth/register", user)
      .then(() => navigate("/welcome"))
      .catch((res) => {
        setCreatedAccount(false);
        navigate("/invalidmail");
      });
  };

  const onSubmit = (data, evt) => {
    evt.preventDefault();
    console.log(data);
    handleForm(data);
    reset();
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="sign-up-form-container">
        <TextField
          id="firstName"
          label="First name *"
          type="name"
          className="sign-up-text-fields"
          defaultValue=""
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          {...register("firstName")}
          variant="standard"
          fullWidth
        />
        <TextField
          id="lastName"
          label="Last name *"
          type="name"
          className="sign-up-text-fields"
          defaultValue=""
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          {...register("lastName")}
          variant="standard"
          fullWidth
        />
        <TextField
          id="email"
          label="Email *"
          type="email"
          className="sign-up-text-fields"
          defaultValue=""
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
          variant="standard"
          fullWidth
        />
        <TextField
          id="retypeEmail"
          label="Retype Email *"
          type="retypeEmail"
          className="sign-up-text-fields"
          defaultValue=""
          error={!!errors.retypeEmail}
          helperText={errors.retypeEmail?.message}
          {...register("retypeEmail")}
          variant="standard"
          fullWidth
        />
        <Tooltip title={title} arrow placement="top">
          <TextField
            id="password"
            label="Password *"
            type="password"
            className="sign-up-text-fields"
            defaultValue=""
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
            variant="standard"
            fullWidth
          />
        </Tooltip>
        <TextField
          id="retypePassword"
          label="Retype password *"
          type="password"
          className="sign-up-text-fields"
          defaultValue=""
          error={!!errors.retypePassword}
          helperText={errors.retypePassword?.message}
          {...register("retypePassword")}
          variant="standard"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          className="sign-up-submit"
          disableElevation
          sx={{ background: "#4285F4", marginTop: "16px" }}
        >
          SIGN UP
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;