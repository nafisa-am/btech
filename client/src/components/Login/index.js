import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);

    // const form = document.getElementById("loginForm");
    // const formData = new FormData(form);

    // alert(`here is your data:
    // ${formData.get("email")}
    // ${formData.get("password")}`);

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };
  const spacer = "mt-2";
  return (
    <div>
      <form
        id="loginForm"
        className="form"
        class="d-flex flex-column align-items-center"
      >
        <h2>Login into your account</h2>
        <input
          value={formState.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={formState.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
          class={spacer}
        />
        <button
          type="button"
          class="btn btn-primary btn-sm mt-3"
          onClick={handleFormSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
