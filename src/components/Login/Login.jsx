import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { notification } from "antd";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const { isSuccess, msg } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess) {
      notification.success({
        msg: "Success",

        description: msg,
      });
    }
    // if(isError){
    //   notification.error({
    //     msg:"Error",
    //     description: msg,
    //   })
    // }
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
