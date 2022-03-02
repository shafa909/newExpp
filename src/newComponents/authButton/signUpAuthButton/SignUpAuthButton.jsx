import './authbutton.css'
import Button from '@mui/material/Button';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { GoogleLogin } from 'react-google-login';
import MicrosoftLogin from "react-microsoft-login";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';


import api from "../../../api"


export default function Authbutton({ }) {

  const navigate = useNavigate();

  async function microsoftAuthHandler(err, data) {
    await api.post("auth/microsoft",
      {
        surname: data["surname"],
        givenName: data['givenName'],
        id: data['id'], email: data['userPrincipalName']
      }).then(response => {
        if (response.data.status == "error") {
          navigate("/invalidmail");
        } else {
          navigate("/welcome");
        }
      })
  }

  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${ typeof window === 'object' && window.location.origin } / linkedin`
    onSuccess: (code) => {
      console.log(code);
      api.post("auth/linkedin",
        {
          code: code
        }).then(response => {
          console.log('res', response)
          if (response.data.status == "error") {
            navigate("/invalidmail");
          } else {
            navigate("/welcome");
          }
        })
    },
    scope: 'r_emailaddress r_liteprofile',
    onError: (error) => {
      console.log(error);
    },
  });

  const responseSuccessGoogle = (response) => {
    api.post("auth/google",
      {
        profileObj: response.profileObj
      }).then(response => {
        console.log('res', response)
        if (response.data.status == "error") {
          navigate("/invalidmail");
        } else {
          navigate("/welcome");
        }
      })
  };

  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <Stack className="auth-short-btn" direction="row" spacing={2}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={renderProps => (
            <Button className="auth-btn-ggle" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} variant="contained" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <i className="fab fa-google" aria-hidden="true"></i>
            </Button>
          )}
          buttonText="Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <Button className="auth-btn-lkdn" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={linkedInLogin} variant="contained">
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </Button>
        <MicrosoftLogin
          clientId={process.env.REACT_APP_MICROSOFT_CLIENT_ID}
          authCallback={microsoftAuthHandler}
          withUserData={true}
          redirectUri={`${window.location.origin}`}
          debug={true}
          children={
            <Button className="auth-btn-msft" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} variant="contained">
              <i className="fab fa-microsoft" aria-hidden="true"></i>
            </Button>
          }
        />
      </Stack>
    </>
  )
}