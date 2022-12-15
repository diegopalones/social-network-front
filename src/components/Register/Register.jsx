import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'


const Register = () => {

const [formData, setFormData] = useState({

name:'',

email:'',

password:''

})

const {username,email,password} = formData
const dispatch = useDispatch()

const onChange = (e)=>{

setFormData((prevState)=> ({

...prevState,

[e.target.name]:e.target.value,

}))

}

const onSubmit = (e) => {

e.preventDefault()

dispatch(register(formData))

}

return (

<form onSubmit={onSubmit}>

<input type="text" name="name" value={username} onChange={onChange} placeholder="usuario"/>

<input type="email" name="email" value={email} onChange={onChange} placeholder="correo"/>

<input type="password" name="password" value={password} onChange={onChange} placeholder="contraseña"/>

<button type="submit">Register</button>

</form>

)

}

export default Register