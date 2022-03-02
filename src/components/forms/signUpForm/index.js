import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import {
  TextField,
  Box,
  Button,
  Stack,
  Tooltip,
  createTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import SignupButtons from "../../buttons/signupButtons";
import { StyledButtons } from "../../buttons/loginButtons/styles";
import { StyledForm } from "../logInForm/styles";
import { StyledParagraph } from "./styles";

const styles = (theme) => ({
  customWidth: {
    maxWidth: 150,
  },
  customPosition: {
    position: "top",
  },
});

const title =
  "Must contain 8 characters, at least 1 uppercase, 1 lowercase, a number and 1 special character";

const SignUpTextFields = ({ classes }) => {
  const navigate = useNavigate();
  const [createdAccount, setCreatedAccount] = useState(undefined);

  const schema = yup
    .object({
      name: yup.string().required("This is a required field"),
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

  const colorTheme = createTheme({
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
        <Box component="div" autoComplete="off">
          <TextField
            id="name"
            label="Name *"
            type="name"
            defaultValue=""
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
            variant="standard"
            fullWidth
            color={
              colorTheme.components.MuiInputLabel.styleOverrides.root.color
            }
            sx={{ marginBottom: "5px", marginTop: "24px", height: "70px" }}
          />
          <TextField
            id="lastName"
            label="Last name *"
            type="name"
            defaultValue=""
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register("lastName")}
            variant="standard"
            fullWidth
            color={
              colorTheme.components.MuiInputLabel.styleOverrides.root.color
            }
            sx={{ marginBottom: "5px", height: "70px" }}
          />
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
            color={
              colorTheme.components.MuiInputLabel.styleOverrides.root.color
            }
            sx={{
              marginBottom: "5px",
              height: "70px",
            }}
          />
          <TextField
            id="retypeEmail"
            label="Retype Email *"
            type="retypeEmail"
            defaultValue=""
            error={!!errors.retypeEmail}
            helperText={errors.retypeEmail?.message}
            {...register("retypeEmail")}
            variant="standard"
            fullWidth
            color={
              colorTheme.components.MuiInputLabel.styleOverrides.root.color
            }
            sx={{
              marginBottom: "5px",
              height: "70px",
            }}
          />

          <Tooltip
            title={title}
            classes={{
              tooltip: classes.customWidth,
            }}
            arrow
            placement="top"
          >
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
              color={
                colorTheme.components.MuiInputLabel.styleOverrides.root.color
              }
              className={classes.TextField}
              sx={{
                marginBottom: "5px",
                height: "70px",
              }}
            />
          </Tooltip>
          <TextField
            id="retypePassword"
            label="Retype password *"
            type="password"
            defaultValue=""
            error={!!errors.retypePassword}
            helperText={errors.retypePassword?.message}
            {...register("retypePassword")}
            variant="standard"
            fullWidth
            color={
              colorTheme.components.MuiInputLabel.styleOverrides.root.color
            }
            sx={{
              marginBottom: "5px",
              height: "70px",
            }}
          />
          <StyledButtons>
            <Stack spacing={2}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{ background: "#4285F4", marginTop: "16px" }}
              >
                SIGN UP
              </Button>
            </Stack>
          </StyledButtons>
          <StyledParagraph>
            <span id="text">
              <p>OR SIGN UP USING</p>
            </span>
          </StyledParagraph>
          <SignupButtons />
        </Box>
      </StyledForm>
    </form>
  );
};

SignUpTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpTextFields);
