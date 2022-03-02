import React, { Component } from "react";
import Button from "@mui/material/Button";

import { StyledWelcomeContainer, StyledTextBox, StyledImage } from "./styles";

const WelcomeToExceptionly = () => {
  return (
    <StyledWelcomeContainer>
      {/* <StyledTextBox>
        <h1>Welcome to Exceptionly</h1>
        <p>
          Exceptionly is a next-generation software talent platform with its
          unique automated sourcing and testing capabilities. It finds, tests,
          and delivers top-notch software talent for businesses around the
          world.
          <br />
          <br />
          Finding a fantastic software engineer costs around 30 thousand dollars
          for businesses in the US. Exceptionly eliminates operational overhead
          and offers a 50% saving with its unique big-data set, automated
          process, and proven track record.
        </p>
        <Button
          id="getstarted"
          variant="contained"
          disableElevation
          sx={{ background: "#4285F4", width: "280px", marginTop: "50px" }}
          type="submit"
        >
          GET STARTED
        </Button>
      </StyledTextBox>
      <StyledImage /> */}
    </StyledWelcomeContainer>
  );
};

export default WelcomeToExceptionly;
