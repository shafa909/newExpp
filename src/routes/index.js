import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import SignUp from "../pages/signup";
import PasswordRecovery from "../pages/passwordRecovery";
import WelcomePage from "../pages/welcomepage";
import InvalidMail from "../pages/invalidmail";

import AuthPage from "../pages/authPage/AuthPage"


import { LinkedInCallback } from "react-linkedin-login-oauth2";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/passwordRecovery" element={<PasswordRecovery />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/linkedin" element={<LinkedInCallback/>} />
      <Route path="/invalidmail" element={<InvalidMail/>} />
    </Routes>
  );
};

export default PageRoutes;
