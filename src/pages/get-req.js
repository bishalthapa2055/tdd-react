import axios from "axios";
import react, { useState, useEffect } from "react";

import React from "react";

const JosnPlaceHolder = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState();

  const fetch = async () => {
    await axios
      .get("http://localhost:5000/api/v1/gerprac")
      // .then((res) => res.json())
      .then((user) => setUsers(user.data.data))
      .catch(() => setErrors("falied to get users"));
  };
  useEffect(() => {
    fetch();
  }, []);

  if (users) {
    // console.log(users);
  } else {
    console.log("Loading .....");
  }

  return (
    <div>
      <h1>Users</h1>
      {errors && <p>{errors}</p>}

      <ul>
        {users?.map((user) => (
          <li key={user?.email} id={user.email}>
            {user?.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JosnPlaceHolder;
