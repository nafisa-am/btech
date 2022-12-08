import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import LoginForm from "../components/Login";
import SignUpForm from "../components/SignUp";

function LoginSignup() {
  return (
    <main>
      <LoginForm />
      <SignUpForm />
    </main>
  );
}

export default LoginSignup;
