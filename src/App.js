import React, { useState } from "react";
import "./App.css";
import Login from "./assets/Login";
import Profile from "./assets/Profile";
import { LoginContext } from "./context/LoginContext.jsx";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      {/* <div> */}
      <LoginContext.Provider
        value={{ userName, setUserName, showProfile, setShowProfile }}
      >
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
      {/* </div> */}
    </div>
  );
}

export default App;
