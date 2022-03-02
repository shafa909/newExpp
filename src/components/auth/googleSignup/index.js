import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { alpha, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
const SuccessButton = styled(Button)(({ theme }) => ({
  width: 36,
  height: 36,
  minWidth: 36,
}));

export default function GoogleLoginComponent() {
  const navigate = useNavigate();

  const [isSignedUp, setIsSignedUp] = useState(false);



  const responseSuccessGoogle = (response) => {

    axios({
      method:"POST",
      url:"https://api.exceptionly.com/auth/google",
      data:{profileObj:response.profileObj}
    }).then(response =>{
      if(response.data.status=="error"){
          
          navigate("/invalidmail");
      }else{

        navigate("/welcome");
      }
    })


  };

  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        type="dark"
        className="successButton"
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        isSignedUp={true}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <SuccessButton
            onClick={renderProps.onClick}
            id="google"
            variant="contained"
            disableElevation
            fullWidth
            sx={{
              background: "#4285F4",
            }}
          >
            <i class="fab fa-google"></i>
          </SuccessButton>
        )}
      />
    </div>
  );
}
