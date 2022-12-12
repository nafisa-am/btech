import { useState } from "react";
import "./style.css";

import { checkPassword, validateEmail } from "../../utils/logins";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setAddress(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    setUserName("");
    setPassword("");
    setEmail("");
    setAddress("");
    setName("");
  };

  const spacer = "mt-2";

  return (
    <div>
      <form className="form" class="d-flex flex-column align-items-center">
        <h2>Create your account</h2>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          class={spacer}
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          class={spacer}
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          class={spacer}
        />
        <input
          value={address}
          name="address"
          onChange={handleInputChange}
          type="text"
          placeholder="address"
          class={spacer}
        />
        <input
          value={password}
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
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default SignUpForm;
