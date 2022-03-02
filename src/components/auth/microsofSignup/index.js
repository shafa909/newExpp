import MicrosoftLogin from "react-microsoft-login";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from 'axios';
const SuccessButton = styled(Button)(({ theme }) => ({
  width: 36,
  height: 36,
  minWidth: 36,
  marginLeft: 8,
  marginRight: 8,
}));

const MicrosofSignupButton = (props) => {
  const navigate = useNavigate();
  const authHandler = (err, data) => {
    console.log(data)
    axios({
      method:"POST",
      url:"https://api.exceptionly.com/auth/microsoft",
      data:{surname: data["surname"], givenName: data['givenName'], id: data['id'],email:data['userPrincipalName'] }
    }).then(response =>{
      if(response.data.status=="error"){
          navigate("/invalidmail");
      }else{
        navigate("/welcome");
      }
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
        <SuccessButton
          variant="contained"
          disableElevation
          sx={{
            background: "#F25022",
            ":hover": {
              backgroundColor: "#e67556",
            },
          }}
        >
          <i class="fab fa-microsoft"></i>
        </SuccessButton>
      }
    />
  );
};

export default MicrosofSignupButton;
