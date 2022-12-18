import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate;
    const onLogout = ()=>{
      dispatch(logout()); 
      setTimeout(() => {
        navigate("/login")
      },3000);
    }
        
    
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button onClick={onLogout}>logout</button>
    </div>
  )
}

export default Header