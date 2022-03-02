import MicrosoftLogin from "react-microsoft-login";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from 'axios';
const MicrosoftLoginButton = (props) => {

  const authHandler = (err, data) => {
    console.log(data)
    axios({
      method:"POST",
      url:"http://localhost:5000/auth/microsoft",
      data:{surname: data["surname"], givenName: data['givenName'], id: data['id'],email:data['userPrincipalName'] }
    }).then(response =>{
      console.log(response)
    })
  };

  return (
    <MicrosoftLogin
      clientId={process.env.REACT_APP_MICROSOFT_CLIENT_ID}
      authCallback={authHandler}
      withUserData={true}
      redirectUri={`http://localhost:3000/welcome`}
      debug={true}
      children={
        <Button
          id="microsoft"
          variant="contained"
          disableElevation
          sx={{
            background: "#F25022",
            marginBottom: "60px",
            ":hover": {
              backgroundColor: "#e67556",
            },
            width: "280px",
          }}
        >
          <i class="fab fa-microsoft"></i> <span>SIGN IN WITH MICROSOFT</span>
        </Button>
      }
    />
  );
};

export default MicrosoftLoginButton;
