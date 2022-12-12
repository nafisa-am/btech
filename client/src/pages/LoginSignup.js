import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import LoginForm from "../components/Login";
import SignUpForm from "../components/SignUp";

function LoginSignup() {
  
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
        `}
      >
        <main
          css={css`
            align-self: center;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            min-width: 100vw;
          `}
        >
          <LoginForm />
          <SignUpForm />
        </main>
      </div>
    </>
  );
}

export default LoginSignup;
