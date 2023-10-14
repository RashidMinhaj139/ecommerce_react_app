import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login_cont">
      <div className="login_wrapper">
        <h2 className="login_tittle">Sign In</h2>
        <form>
            <input  placeholder="Username" />
            <input  placeholder="password" />
            <button>Login</button>
            <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
            <a href="#">CREATE A NEW ACCOUNT</a>
        </form>

      </div>
    </div>
  );
};

export default Login;
