import './login.css'
import dotLogo from "../../assets/dot_logo.png";
import wordLogo from "../../assets/word_logo.png";
import LoginForm from "../forms/loginFrom/LoginForm";
import AuthButtons from "../authButton/loginAuthButton/AuthButtons"
import Link from '@mui/material/Link';

const Login = ({ toggleView }) => {
  return (
    <div className="login-main-container ">
      <div className="login-left-container">
        <img className="login-dot-logo" src={dotLogo} alt='dot-logo' />
        <p className="login-info-title">WELCOME TO THE MARKETPLACE</p>
        <p className="login-info-desc">Exceptionly provides hands-on tested  remote software engineers unlike any other outsourcing company. Our product delivers talent directly for hiring without a lifetime markup over 400%. </p>
      </div>
      <div className="login-right-container">
        <img className='word-logo' src={wordLogo} alt='compy-logo' />
        <p className="sign-title">Sign in to your account</p>
        <LoginForm />
        <p className="or-title">OR</p>
        <AuthButtons />
        <div className="login-bottom-container">
          <p>
            <span style={{ color: '#d3d3d3', fontSize: '14px' }}>{"Don't have an account?  "}</span>
            <Link href="#" underline="none" onClick={toggleView} className='create-account-tag' style={{ fontSize: '14px' }}>
              {'  CREATE AN ACCOUNT'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;