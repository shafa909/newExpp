import React, { Component } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Box, Button, Stack, TextField, createTheme } from "@mui/material";
import { StyledForm } from "../logInForm/styles";
import { StyledButtons } from "../../buttons/loginButtons/styles";
import { RecoveryText } from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid format")
      .required("This is a required field")
      .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}"),
  })
  .required();

function RecoveryForm() {
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
            sx={{ marginBottom: "20px", marginTop: "24px" }}
          />
          <StyledButtons>
            <Stack spacing={1}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{ background: "#4285F4", marginTop: "23px" }}
              >
                RECOVER PASSWORD
              </Button>
            </Stack>
          </StyledButtons>
          <RecoveryText>
            If the email provided matches an existent account, we will send you
            a link with recovery instructions.
          </RecoveryText>
        </Box>
      </StyledForm>
    </form>
  );
}

export default RecoveryForm;
