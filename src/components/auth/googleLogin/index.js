import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function GoogleLoginComponent() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    emailId: "",
  });

  const success = (response) => {

    // API CALL email if bussiness account
    // TRUE
    // Sent response to api
    // False
    // Fail login with error message
    setUserInfo({
      name: response.name,
      emailId: response.email,
    });
    setIsLoggedIn(true);
    navigate("/welcome");
  };

  const error = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        type="dark"
        className="googleButton"
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={(res) => {

          success(res.profileObj);
        }}
        onFailure={() => error()}
        isLoggedIn={true}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            id="google"
            variant="contained"
            disableElevation
            fullWidth
            sx={{ background: "#4285F4" }}
          >
            <i class="fab fa-google"></i> <span>SIGN IN WITH GOOGLE</span>
          </Button>
        )}
      />
    </div>
  );
}
