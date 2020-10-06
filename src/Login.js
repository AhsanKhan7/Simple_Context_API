import React from "react";

function Login({ setUser }) {
  const loginToApp = () => {
    //login stuff
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginToApp}>Login</button>
    </div>
  );
}

export default Login;
