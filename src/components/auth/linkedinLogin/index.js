import React, { Component } from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import { LinkedIn, useLinkedIn } from "react-linkedin-login-oauth2";

const LinkedInPage = () => {
  const { linkedInLogin } = useLinkedIn({
    clientId: "770xm2is7tfikz",
    redirectUri: 'http://localhost:3000/linkedin', // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <LinkedIn
      clientId={process.env.REACT_APP_LINKEDIN_CLIENT_ID}
      onFailure={(response) => console.log(response)}
      onSuccess={(response) => console.log(response)}
      redirectUri={`${window.location.origin}/linkedin`}
    >
      {({ linkedInLogin }) => (
        <Button
          onClick={linkedInLogin}
          id="linkedin"
          variant="contained"
          disableElevation
          sx={{
            background: "#2867B2",
            ":hover": {
              backgroundColor: "#467ec2",
            },
          }}
        >
          <i class="fab fa-linkedin"></i>
          <span>SIGN IN WITH LINKEDIN</span>
        </Button>
      )}
    </LinkedIn>
  );
};

export default LinkedInPage;
