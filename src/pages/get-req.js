import axios from "axios";
import react, { useState, useEffect } from "react";

import React from "react";

const JosnPlaceHolder = () => {
  const [users, setUsers] = useState([]);
  


  // for jsonplaceholder  api 
  /*
  const fetch = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      // .then((res) => res.json())
      .then((data) => setUsers(data.data.map((user) => user.name)))
      .catch(() => setErrors("falied to get users"));
  };

  */


  // for my own api 
 
  const fetchFun = async () => {
   const response = await axios.get("https://reqres.in/api/users");
   const {data} = response;
  
   setUsers(data.data)
  };
  useEffect(() => {
    fetchFun();
  }, []);

  

  console.log(users)
  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            
            {user.email}
          </li>
        ))}
      </ul>

        

    </div>
  );
};

export default JosnPlaceHolder;
