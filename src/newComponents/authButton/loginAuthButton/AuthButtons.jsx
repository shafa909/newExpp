import Button from '@mui/material/Button';
import './authbutton.css'
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { GoogleLogin } from 'react-google-login';
import { useMsal } from "@azure/msal-react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import { loginRequest } from "./authConfig";
import MicrosoftLogin from "react-microsoft-login";
import { useNavigate } from "react-router-dom";
import axios from 'axios';




export default function Authbutton({ }) {

  const navigate = useNavigate();
  const msalInstance = new PublicClientApplication(msalConfig);

  function handleLogin(instance) {
    instance.loginPopup(loginRequest).then(response => {
      console.log()
    }).catch(e => {
      console.error(e);
    });
  }


  const authHandler = (err, data) => {
    console.log(data)
    axios({
      method: "POST",
      url: "https://api.exceptionly.com/auth/microsoft",
      data: { surname: data["surname"], givenName: data['givenName'], id: data['id'], email: data['userPrincipalName'] }
    }).then(response => {
      if (response.data.status == "error") {
        navigate("/invalidmail");
      } else {
        navigate("/welcome");
      }
    })
  };



  const SignInButton = () => {
    const { instance } = useMsal();
    return (
      <Button className="auth-btn-microsoft" variant="contained" onClick={() => handleLogin(instance)}>
        <i className="fab fa-microsoft" aria-hidden="true"></i>
        <span style={{ marginLeft: '10px' }}>SIGN IN WITH MICROSOFT</span>
      </Button>
    );
  }

  const { linkedInLogin } = useLinkedIn({
    clientId: '86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${ typeof window === 'object' && window.location.origin } / linkedin`
    onSuccess: (code) => {
      console.log('code', code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <GoogleLogin
        clientId="250435082293-c827npkgaljaoo587bd188386jigdh7l.apps.googleusercontent.com"
        render={renderProps => (
          <Button className="auth-btn-google" variant="contained" onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <i className="fab fa-google" aria-hidden="true"></i>
            <span style={{ marginLeft: '10px' }}>SIGN IN WITH GOOGLE</span>
          </Button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

      <Button className="auth-btn-linkedin" variant="contained" onClick={linkedInLogin} >
        <i className="fab fa-linkedin" aria-hidden="true"></i>
        <span style={{ marginLeft: '10px' }}>SIGN IN WITH LINKEDIN</span>
      </Button>

      {/* <MsalProvider instance={msalInstance}>
        <SignInButton />
      </MsalProvider> */}

      <MicrosoftLogin
        clientId={"76a35a06-c1a8-4719-84e7-f47d59e4bff2"}
        authCallback={authHandler}
        withUserData={true}
        redirectUri={`http://localhost:3000/welcome`}
        debug={true}
        children={
          < Button className="auth-btn-microsoft" variant="contained" >
            <i className="fab fa-microsoft" aria-hidden="true"></i>
            <span style={{ marginLeft: '10px' }}>SIGN IN WITH MICROSOFT</span>
          </Button >
        }
      />

    </>
  )
}