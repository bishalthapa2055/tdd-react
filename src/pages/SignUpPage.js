import React from 'react'

const SignUpPage = () => {
  return (
    <>
    <div>
        <h1>Sign Up</h1>
        <input id="username" />
        <label htmlFor="username">Username</label>
        <input id="email" />
        <label htmlFor="email">E-mail</label>
        <input id="password" type="password" />
        <label htmlFor="password">Password</label>
        <input id="passwordRepeat" type="password" />
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <button disabled>Sign Up</button>
      </div>
    </>
  )
}

export default SignUpPage;