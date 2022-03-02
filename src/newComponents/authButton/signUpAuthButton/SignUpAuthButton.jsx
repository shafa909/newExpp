import Button from '@mui/material/Button';
import './authbutton.css'
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { GoogleLogin } from 'react-google-login';
import { useMsal } from "@azure/msal-react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import { loginRequest } from "./authConfig";
import Stack from '@mui/material/Stack';



export default function Authbutton({ }) {

  const msalInstance = new PublicClientApplication(msalConfig);

  function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  }

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
    redirectUri: `https://exceptionly.vercel.app`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
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
      <Stack className="auth-short-btn" direction="row" spacing={2}>
        <Button className="auth-btn-ggle" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} variant="contained">
          <i className="fab fa-google" aria-hidden="true"></i>
        </Button>
        <Button className="auth-btn-lkdn" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} variant="contained">
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </Button>
        <Button className="auth-btn-msft" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} variant="contained">
          <i className="fab fa-microsoft" aria-hidden="true"></i>
        </Button>
      </Stack>
    </>
  )
}