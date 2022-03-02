import styled from "styled-components";
import shader from "../../../assets/shader.png";

export const StyledWelcomeContainer = styled.div`
  width: 604px;
  min-height: 850px;
  border-radius: 4px;
  background: #252525;
  box-shadow: 0 1px 2px #252525;
  display: flex;
  justify-content: center;
  font-family: Roboto;
`;

export const StyledTextBox = styled.div`
  max-width: 484px;
  min-height: 509px;
  margin: 40px 0px;
  text-align: center;
  background: #252525;

  h1 {
    font-size: 34px;
    font-weight: normal;
    line-height: 36px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }

  p {
    flex: none;
    margin-top: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.74);
  }
`;

export const StyledImage = styled.div`
  background-image: url(${shader});
  z-index: 2;
  align-self: flex-end;
  background-size: cover;
`;
