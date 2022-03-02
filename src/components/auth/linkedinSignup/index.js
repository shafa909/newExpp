import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import { LinkedIn, useLinkedIn } from "react-linkedin-login-oauth2";
import axios from 'axios';
const SuccessButton = styled(Button)(({ theme }) => ({
  width: 36,
  height: 36,
  minWidth: 36,
  marginRight: 4,
}));

const LinkedInPage = () => {
  const navigate = useNavigate();
  const { linkedInLogin } = useLinkedIn({
  clientId: '770xm2is7tfikz',
  redirectUri: `${window.location.origin}/linkedin`,
  onSuccess: (code) => {
    console.log(code);
    axios({
      method:"POST",
      url:"https://api.exceptionly.com/auth/linkedin",
      data:{code:code}
    }).then(res => {
      
      if(res.data.status=="error"){

          navigate("/invalidmail");
      }else{

        navigate("/welcome");
      }
    });
  },
  scope: 'r_emailaddress r_liteprofile',
  onError: (error) => {
    console.log(error);

  },
});

  return (


        <SuccessButton
          onClick={linkedInLogin}
          variant="contained"
          disableElevation
          sx={{
            background: "#2867B2",
            marginLeft: "13px",
            ":hover": {
              backgroundColor: "#467ec2",
            },
          }}
        >
          <i class="fab fa-linkedin"></i>
        </SuccessButton>


  );
};

export default LinkedInPage;
