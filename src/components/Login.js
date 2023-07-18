import React from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const Login = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const authUser = () => {
    dispatch(authActions.login());
  };
  return (
    <div className="login">
      <button onClick={authUser}>Login</button>
    </div>
  );
};

export default Login;
