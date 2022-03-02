import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 100%;

  .MuiFormControl-root {
    max-width: 100% !important;
  }

  span {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
    height: 22px;

    #remember {
      margin-left: 11px;
    }

    a {
      text-decoration: none;
      justify-content: space-between;
      margin-left: 37px;
      color: #4285f4;
      a:hover {
        color: #6ea2f8;
      }
    }
  }
`;
