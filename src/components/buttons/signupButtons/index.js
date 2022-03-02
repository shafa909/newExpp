import React, { Component } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GoogleLoginComponent from "../../auth/googleSignup";
import LinkedInPage from "../../auth/linkedinSignup";
import MicrosoftSignupButton from "../../auth/microsofSignup";
import { StyledSignupButtons } from "./styles";

import MicrosoftLoginButton from "../../auth/microsoftLogin";

export default function SignupButtons() {
  return (
    <StyledSignupButtons>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <GoogleLoginComponent />
        <LinkedInPage />
        <MicrosoftSignupButton />
      </Stack>
    </StyledSignupButtons>
  );
}
