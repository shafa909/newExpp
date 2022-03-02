import styled, { keyframes } from "styled-components";

const Transition = keyframes`
  0% { transform: scale(0.8); }
    100% { transform: scale(1); }
`;

export const StyledFormContainer = styled.div`
  max-width: 850px;
  min-height: 600px;
  border-radius: 4px;
  display: flex;
  font-family: Roboto;
  box-shadow: 0 1px 2px #252525;
  animation: ${Transition} 0.25s ease-out;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  footer {
    background: rgba(37, 37, 37, 0.9);
    padding: 16px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    span {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.25px;
      color: rgba(255, 255, 255, 0.87);
      a {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        color: #4285f4;
        text-decoration: none;
        margin-left: 3px;
        a:hover {
          color: #6ea2f8;
        }
      }
    }
  }
`;

export const Left = styled.div`
  min-width: 450px;
  background: #252525;
  border-radius: 4px 0 0 4px;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
  position: relative;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const LeftLogo = styled.img`
  height: 309px;
  width: 310px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 70px));
`;

export const TextBox = styled.div`
  width: 277px;
  margin: 0 auto;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 35px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  opacity: 0.87;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #ffffff;
  opacity: 0.74;
  width: 280px;
  text-align: center;
  margin-top: 24px;
`;

export const Right = styled.div`
  background: #ffffff;
  width: 400px;
  border-radius: 0 4px 4px 0;
  position: relative;
  padding: 60px 60px 100px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const RightLogoBox = styled.div`
  align-items: center;

  p {
    text-align: center;
    color: black;
    opacity: 0.76;
    font-size: 20px;
  }
`;
export const RightLogo = styled.img`
  width: 199px;
  height: 42px;
  display: block;
  margin: 0 auto 24px;
`;

export const Footer = styled.footer`
  background: rgba(37, 37, 37, 0.9);
  padding: 16px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const FooterText = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: rgba(255, 255, 255, 0.87);
`;

export const FooterLink = styled.a`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #4285f4;
  text-decoration: none;
`;
