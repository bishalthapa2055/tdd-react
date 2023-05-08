import axios from "axios";
import { useState } from "react";

const LoginForm = ({ onLoginSuccess }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
try{
    const response = await axios.post("https://reqres.in/api/login", loginCredentials);
    console.log(response)
    if(response){
     
      onLoginSuccess()
    }
}catch(e){
    setErrors(e.response?.data.error)
}



    // if (data.error) {
    //   setErrors(true);
    // } else {
    //   onLoginSuccess();
    // }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <input
          type={"text"}
          placeholder="email"
          onChange={(e) =>
            setLoginCredentials((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <input
          type={"password"}
          placeholder="password"
          onChange={(e) =>
            setLoginCredentials((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </div>

      {errors && <div>{errors}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;