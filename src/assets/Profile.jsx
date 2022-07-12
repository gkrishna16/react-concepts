import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Profile = () => {
  const { userName } = useContext(LoginContext);

  return (
    <div>
      <h1>Profile</h1>
      <h2>{userName}</h2>
    </div>
  );
};

export default Profile;
