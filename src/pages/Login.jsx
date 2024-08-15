import React from "react";
import { Helmet } from "react-helmet-async";
import LoginView from "../modules/public/auth/login/pages/LoginView";

function Login() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Login</title>
      </Helmet>
      <LoginView />
    </>
  );
}

export default Login;
