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
const RightContainer = ({
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
      
      </Right>
    </StyledFormContainer>
  );
};

export default RightContainer;
