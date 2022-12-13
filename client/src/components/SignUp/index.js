import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function SignUpForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "",
    address: "",
    name: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
      username: "",
      address: "",
      name: "",
    });
  };

  const spacer = "mt-2";

  return (
    <div>
      <form
        className="form"
        id="signupForm"
        class="d-flex flex-column align-items-center"
      >
        <h2>Create your account</h2>
        <input
          value={formState.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={formState.username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          class={spacer}
        />
        <input
          value={formState.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          class={spacer}
        />
        <input
          value={formState.address}
          name="address"
          onChange={handleInputChange}
          type="text"
          placeholder="address"
          class={spacer}
        />
        <input
          value={formState.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          class={spacer}
        />
        <button
          type="button"
          class="btn btn-primary btn-sm mt-3"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
