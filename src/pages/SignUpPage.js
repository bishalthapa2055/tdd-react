import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const disabled = () => {
    let isDisabled = true;
    if (password && passwordRepeat) {
      isDisabled = password !== passwordRepeat;
    }
    return isDisabled;
  };
  const submit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      email,
      password,
      passwordRepeat,
    };
    const response = await axios.post(
      "http://localhost:5000/api/v1/prac",
      body
    );
    console.log(response);
  };

  return (
    <>
      <form>
        <h1>Sign Up</h1>
        <input id="username" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="username">Username</label>
        <input id="email" onChange={(e) => setEmail(e.target.value)} />
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
        <button disabled={disabled()} onClick={submit}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
