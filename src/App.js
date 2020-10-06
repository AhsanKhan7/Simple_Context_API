import React, { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <h1>Facebook App</h1>
      <h2>{user ? `you logged in ${user}` : "No user"}</h2>

      <Login />
    </div>
  );
}

export default App;
