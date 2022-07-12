import React, { useState, useContext } from "react";


const Login = () => {
  return (
    <div>
      <form>
        {/* <label>Username</label> */}
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setShowProfile(true);
          }}
        >
          LOGIN
        </button>
      </form>
      {setShowProfile && <h1>{userName}</h1>}
    </div>
  );
};

export default Login;
