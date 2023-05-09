import { useState } from "react";
import SignUpPage from "./pages/SignUpPage";
import JosnPlaceHolder from "./pages/get-req";
import LoginForm from "./pages/login";

function App() {
  const [isUserLoggedIn ,setIsUserLoggedIn] = useState(false);


  const handleLoginSuccess = () => {
    setIsUserLoggedIn(true);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
  };
  return (
    <>
      {/* <SignUpPage /> */}
      {/* <JosnPlaceHolder /> */}
      {}
     
      {/* {
        isUserLoggedIn ? 
        (
        <> 
        <JosnPlaceHolder />  
        <button onClick={handleLogout} > Logout</button>
        </>
        )
        : 
        ( 
        <LoginForm onLoginSuccess={handleLoginSuccess} 
        />
         )
      } */}
      <LoginForm />
    </>
  );
}

export default App;
