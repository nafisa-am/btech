import React, { useState } from "react";

import LoginForm from "../components/Login";
import SignUpForm from "../components/SignUp";

function LoginSignup() {
  return (
    <>
      <div class="mh-100 d-flex flex-column justify-content-center">
        <main class="d-flex justify-content-evenly align-items-center min-vh-100">
          <LoginForm />
          <SignUpForm />
        </main>
      </div>
    </>
  );
}

export default LoginSignup;
