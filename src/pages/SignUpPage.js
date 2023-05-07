import React, { useState } from "react";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const disabled = () => {
    let isDisabled = true;
    if (password && passwordRepeat) {
      isDisabled = password !== passwordRepeat;
    }
    return isDisabled;
  };
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <input id="username" />
        <label htmlFor="username">Username</label>
        <input id="email" />
        <label htmlFor="email">E-mail</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="passwordRepeat"
          type="password"
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <button disabled={disabled()}>Sign Up</button>
      </div>
    </>
  );
};

export default SignUpPage;
