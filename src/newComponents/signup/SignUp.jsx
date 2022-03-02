import './signup.css'
import dotLogo from "../../assets/dot_logo.png";
import wordLogo from "../../assets/word_logo.png";
import Link from '@mui/material/Link';
import SignUpForm from '../forms/signupFrom/SignUpForm';
import AuthButton from '../authButton/signUpAuthButton/SignUpAuthButton'


const SignUp = ({ toggleView }) => {
  return (
    <div className="sign-up-main-container">
      <div className="sign-up-left-container">
        <img className="sign-up-dot-logo" src={dotLogo} alt='dot-logo' />
        <p className="sign-up-info-title">WELCOME TO THE MARKETPLACE</p>
        <p className="sign-up-info-desc">Exceptionly provides hands-on tested  remote software engineers unlike any other outsourcing company. Our product delivers talent directly for hiring without a lifetime markup over 400%. </p>
      </div>
      <div className="sign-up-right-container">
        <img className='sign-up-word-logo' src={wordLogo} alt='compy-logo' />
        <p className="sign-up-title">Sign up to your account</p>
        <SignUpForm />
        <p className="sign-up-or-title">OR SIGN UP USING</p>
        <AuthButton />
        <div className="sign-up-bottom-container">
          <p>
            <span style={{ color: '#d3d3d3', fontSize: '14px' }}>{"Already have an account?  "}</span>
            <Link href="#" underline="none" onClick={toggleView} className='sign-in-tag' style={{ fontSize: '14px' }}>
              {'  SIGN IN HERE'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;