import { useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";

import WelcomeToExceptionly from "../../components/containers/onboardingContainer";
import BusinessTextFields from "../../components/forms/businessInfoForm";

import shader from "../../assets/shader.png";
import city from "../../assets/city.png";

const BusinessInfo = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <WelcomeToExceptionly
      stepper={
        <MobileStepper
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{
            maxWidth: "100%",
            flexGrow: 1,
            alignSelf: "center",
            maxHeight: "20px",
            opacity: 1,
            backgroundColor: "#252525",
            marginTop: "32px",
            marginBottom: "40px",
          }}
        />
      }
      title={"Business Information"}
      paragraphOne={
        "The first step is to complete your business information, which will allow us to provide accurate results to your requests."
      }
      form={<BusinessTextFields />}
      buttonOne={
        <Button
          onClick={handleNext}
          disabled={activeStep === 5}
          id="previous"
          variant="contained"
          disableElevation
          sx={{
            background: "#4285F4",
            width: "80px",
            marginTop: "40px",
            marginBottom: "67px",
          }}
          type="submit"
        >
          PREVIOUS
        </Button>
      }
      buttonTwo={
        <Button
          onClick={handleNext}
          disabled={activeStep === 5}
          id="previous"
          variant="contained"
          disableElevation
          sx={{
            background: "#4285F4",
            width: "80px",
            marginTop: "40px",
            marginBottom: "67px",
          }}
          type="submit"
        >
          NEXT
        </Button>
      }
      shader={shader}
      shaderAltText={"Shader"}
      themePic={city}
      altText={"City"}
    ></WelcomeToExceptionly>
  );
};

export default BusinessInfo;
