import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSignUpTitle } from "../../actions";

import AllPagesBackground from "../../components/background";
import FormContainer from "../../components/containers/formContainer";
import dotLogo from "../../assets/dot_logo.png";
import wordLogo from "../../assets/word_logo.png";
import SignUpTextFields from "../../components/forms/signUpForm";

const SignUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSignUpTitle("Sign-Up to Exceptionly"));
  }, []);
  return (
    <AllPagesBackground>
      <FormContainer
        leftImage={dotLogo}
        leftaltText={"Exceptionly Logo"}
        title={"WELCOME TO THE MARKETPLACE"}
        leftText={
          "Exceptionly provides hands on tested remote software engineers unlike any other outsourcing company. Our product delivers talent directly for hiring without a lifetime markup over 400%"
        }
        rightImage={wordLogo}
        rightText={"Sign up to your account"}
        rightAltText={"Word Logo Exceptionly"}
        footerText={"Already have an account?"}
        footerLink={<Link to="/">SIGN IN HERE</Link>}
      >
        <SignUpTextFields />
      </FormContainer>
    </AllPagesBackground>
  );
};

export default SignUp;
