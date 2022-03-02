import { CSSTransition } from 'react-transition-group';
import { useState } from "react";

import background from "../../assets/background_image.png";
import './authpage.css'

import Login from "../../newComponents/login/Login"
import SignUp from "../../newComponents/signup/SignUp"

const AuthPage = () => {

  const [view, setView] = useState(true)
  const veiwHandle = () => {
    setView(!view)
  }

  return (
    <div id="background-container" style={{ backgroundImage: `url(${background})` }}>
      <CSSTransition in={view} timeout={250} classNames="transitionDiv">
        {view ? <Login toggleView={veiwHandle} /> : <SignUp toggleView={veiwHandle} />}
      </CSSTransition>
    </div>
  );
};

export default AuthPage;
