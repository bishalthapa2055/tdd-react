import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [errors, setErrors] = useState();
  const [sucess , setSucess] = useState(false)

  const handleOnSubmit = async (e) => {
    e.preventDefault();
try{
  const body={
    email , password
  }

  console.log(body ,'[body]')
    const response = await axios.post("https://reqres.in/api/login", body);
    console.log(response)
    if(response){
    console.log("hit")
    localStorage.setItem('token', response.data.token)
    setSucess(true)
    }
}catch(e){
    setErrors(e.response?.data.error)
}

  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <input
          type={"text"}
          placeholder="email"
          value={email}
          onChange={(e) =>
           setEmail(e.target.value)}
          
        />
      </div>

      <div>
        <input
          type={"password"}
          placeholder="password"
          value={password}
          onChange={(e) =>
           setPassword(e.target.value)
          }
        />
      </div>

      {errors && <div>{errors}</div>}
      <button type="submit">Submit</button>

      {sucess && <p>{"login sucessfull"}</p>}
    </form>
  );
};

export default LoginForm;