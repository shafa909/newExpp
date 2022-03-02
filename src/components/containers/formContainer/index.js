import React, { Component } from "react";
import {
  StyledFormContainer,
  Left,
  LeftLogo,
  TextBox,
  Title,
  Text,
  Right,
  RightLogoBox,
  RightLogo,
  Footer,
} from "./styles";
const FormContainer = ({
  leftImage,
  leftAltText,
  title,
  leftText,
  rightImage,
  rightAltText,
  rightText,
  footerText,
  footerLink,
  href,
  children,
}) => {
  return (
    <StyledFormContainer>
      <Left>
        <LeftLogo src={leftImage} alt={leftAltText} />
        <TextBox>
          <Title>{title}</Title>
          <Text>{leftText}</Text>
        </TextBox>
      </Left>
      <Right>
        <RightLogoBox>
          <RightLogo src={rightImage} alt={rightAltText} />
          <p>{rightText}</p>
        </RightLogoBox>
        {children}
        <Footer>
          <span>
            {footerText} <a href={href}>{footerLink}</a>
          </span>
        </Footer>
      </Right>
    </StyledFormContainer>
  );
};

export default FormContainer;
