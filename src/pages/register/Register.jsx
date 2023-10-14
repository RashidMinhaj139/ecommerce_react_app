import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div className="register_cont">
      <div className="register_wrapper">
        <h2 className="reg_tittle">Create An Account</h2>
        <form >
          <input placeholder="name" />
          <input placeholder="last name" />
          <input placeholder="username" />
          <input placeholder="email" />
          <input placeholder="password" />
          <input placeholder="confirm password" />
          <div className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
