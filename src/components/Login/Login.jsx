import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, msg } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        msg: "Success",

        description: msg,
      });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    // if(isError){
    //   notification.error({
    //     msg:"Error",
    //     description: msg,
    //   })
    // }
    dispatch(reset())
  }, [isSuccess, msg]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    console.log("formData", formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="correo"
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="contraseña"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
