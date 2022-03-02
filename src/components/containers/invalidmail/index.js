import React, { Component } from "react";
import { Box, Button, Stack, TextField, createTheme } from "@mui/material";
import { StyledButtons } from "../../buttons/loginButtons/styles";
import { RecoveryText } from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Warning() {
  const navigate = useNavigate();
  function navigateSignup(){

  }
  return (

      <div>
        <Box component="div" noValidate autoComplete="off">
        <RecoveryText>
          It appears that you've tried to use a non-corporate domain to register.
        </RecoveryText>
        <RecoveryText>
          If you're a company looking to hire our vetted candidates, please try again using your corporate email.
        </RecoveryText>
          <StyledButtons>
            <Stack spacing={1}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{ background: "#4285F4", marginTop: "23px" }}
                onClick={()=>{navigate("/signup")}}
              >
                TRY AGAIN WITH CORPORATE
              </Button>
            </Stack>
          </StyledButtons>
          <RecoveryText>
          Are you a <strong>candidate</strong>? You can find our open positions <a href="https://talent.exceptionly.com/jobs/Careers?source=Website&_ga=2.244729859.748039773.1645099627-965146016.1636370298">here</a>.
          </RecoveryText>
        </Box>
      </div>

  );
}

export default Warning;
