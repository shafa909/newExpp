import AllPagesBackground from "../../components/background";

const LoggedIn = () => {
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
        rightText={"Sign in to your account"}
        rightAltText={"Word Logo Exceptionly"}
      ></FormContainer>
    </AllPagesBackground>
  );
};

export default LoggedIn;
