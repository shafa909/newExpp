import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllPagesBackground from "../../components/background";
import FormContainer from "../../components/containers/formContainer";
import RecoveryForm from "../../components/forms/recoveryForm";
import dotLogo from "../../assets/dot_logo.png";
import wordLogo from "../../assets/word_logo.png";

const PasswordRecovery = () => {
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
        rightText={"Password Recovery"}
        rightAltText={"Word Logo Exceptionly"}
        footerText={"Already have an account?"}
        href={"https://www.google.com.br/"}
        footerLink={<Link to="/">SIGN IN HERE</Link>}
      >
        <RecoveryForm />
      </FormContainer>
    </AllPagesBackground>
  );
};

export default PasswordRecovery;
