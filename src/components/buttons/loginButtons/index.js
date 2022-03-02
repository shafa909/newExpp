import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { StyledButtons } from "./styles";
import GoogleLoginComponent from "../../auth/googleLogin";
import LinkedInPage from "../../auth/linkedinLogin";
import MicrosoftLoginButton from "../../auth/microsoftLogin";

export default function LoginButtons() {
  return (
    <StyledButtons>
      <Stack spacing={2}>
        <Button
          id="signin"
          variant="contained"
          disableElevation
          sx={{ background: "#4285F4", marginTop: "27px" }}
          type="submit"
        >
          SIGN IN
        </Button>
        <p>OR</p>
        <GoogleLoginComponent />
        <LinkedInPage />
        <MicrosoftLoginButton />
      </Stack>
    </StyledButtons>
  );
}
