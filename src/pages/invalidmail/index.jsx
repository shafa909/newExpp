import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllPagesBackground from "../../components/background";
import RightContainer from "./RightContainer";
import Warning from "../../components/containers/invalidmail";
import dotLogo from "../../assets/dot_logo.png";
import wordLogo from "../../assets/word_logo.png";

const InvalidMail = () => {
  return (
    <AllPagesBackground>
      <RightContainer
        leftImage={dotLogo}
        leftaltText={"Exceptionly Logo"}
        title={"WELCOME TO THE MARKETPLACE"}
        leftText={
          "Exceptionly provides hands on tested remote software engineers unlike any other outsourcing company. Our product delivers talent directly for hiring without a lifetime markup over 400%"
        }
        rightImage={wordLogo}
        rightText={"Invalid Registration"}
        rightAltText={"Word Logo Exceptionly"}

      >
        <Warning />
      </RightContainer>
    </AllPagesBackground>
  );
};

export default InvalidMail;
