import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const { navigate } = useNavigate(); 
    const { user } = useSelector((state) => state.auth);
    const onLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
      setTimeout(() => {
        navigate("/"); 
      }, 3000);
    };

  return (
    <div>
      {user ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={onLogout}>logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;
