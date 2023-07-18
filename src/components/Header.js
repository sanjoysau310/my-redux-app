import React from "react";

import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import {authActions} from "../store/auth"

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch=useDispatch()
  const logoutuser=()=>{
    dispatch(authActions.logout())
  }
  return (
    <header className="header">
      <h1>Redux Practice</h1>
      {auth && (
        <nav>
          <ul>
            <li>Home</li>
            <li>Practice</li>
            <li>
              <button onClick={logoutuser}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
