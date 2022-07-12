import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { userName, setUserName, setShowProfile, showProfile } =
    useContext(LoginContext);

  console.log(userName);

  return (
    <div>
      {/* <form> */}
      {/* <label>Username</label> */}
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />{" "}
      <input
        type="text"
        placeholder="Password..."
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        LOGIN
      </button>
      {/* </form> */}
      {/* {setShowProfile && <h1>{userName}</h1>} */}
    </div>
  );
};

export default Login;
