import React from "react";
import "./Bank.css";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth);
  console.log(login);
  return (
    <div
      style={{
        height: "50px",
        backgroundColor:"lightcyan",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <button
        className="btn btn-login"
        onClick={() => dispatch({ type: "login" })}
      >
        {login.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;
