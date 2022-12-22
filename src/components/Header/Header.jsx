import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccessLogout, msg } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      
      navigate("/search/"+text)
    }
  };

  useEffect(() => {
    if (isSuccessLogout) {
      notification.success({
        msg: "Success",

        description: msg,
      });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    dispatch(reset());
  }, [isSuccessLogout, msg]);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <nav>
      <span>header</span>
      <div>
        <span>
          <input onKeyUp={handleChange} placeholder="Buscar post" name="text" />
          <Link to="/">Home</Link>
          {/* <Link to="/profile">Profile</Link> */}
        </span>
        {user ? (
          <>
            <span onClick={onLogout}>Logout</span>
            <span>
              <Link to="/profile">{user.user.name}</Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
