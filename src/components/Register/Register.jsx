import React, { useState } from 'react'

const Register = () => {

const [formData, setFormData] = useState({

name:'',

email:'',

password:''

})

const {name,email,password} = formData

const onChange = (e)=>{

setFormData((prevState)=> ({

...prevState,

[e.target.name]:e.target.value,

}))

}

const onSubmit = (e) => {

e.preventDefault()

console.log('formData',formData)

}

return (

<form onSubmit={onSubmit}>

<input type="text" name="name" value={name} onChange={onChange} placeholder="usuario"/>

<input type="email" name="email" value={email} onChange={onChange} placeholder="correo"/>

<input type="password" name="password" value={password} onChange={onChange} placeholder="contraseña"/>

<button type="submit">Register</button>

</form>

)

}

export default Register