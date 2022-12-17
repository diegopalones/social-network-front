import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'
import { notification } from "antd";


const Register = () => {

const [formData, setFormData] = useState({

username:'',

email:'',

password:'',

password2:''

})

const {username,email,password, password2} = formData
const dispatch = useDispatch()

const onChange = (e)=>{

setFormData((prevState)=> ({

...prevState,

[e.target.name]:e.target.value,

}))

}

const onSubmit = (e) => {

e.preventDefault()

if (password !== password2) {
    return notification.error({
      message: "Error",
      description: "No coinciden las contraseñas",
    });
  } else {
    dispatch(register(formData));
    return notification.success({
      message: "Bienvenid@",
      description: "Gracias por registrarte",
    });
  }
};
// return (
//   <form onSubmit={onSubmit}>
//     <input
//       type="text"
//       name="name"
//       value={username}
//       onChange={onChange}
//       placeholder="Nombre"
//     />
//     <input
//       type="email"
//       name="email"
//       value={email}
//       onChange={onChange}
//       placeholder="Correo"
//     />
//     <input
//       type="number"
//       name="age"
//       value={age}
//       onChange={onChange}
//       placeholder="Edad"
//     />
//     <input
//       type="password"
//       name="password"
//       value={password}
//       onChange={onChange}
//       placeholder="Contraseña"
//     />
//     <input
//       type="password"
//       name="password2"
//       value={password2}
//       onChange={onChange}
//       placeholder="Repite contraseña"
//     />
//     <button type="submit">Register</button>
//   </form>
// );
// };
// export default Register;


// }

return (

<form onSubmit={onSubmit}>

<input type="text" name="username" value={username} onChange={onChange} placeholder="usuario"/>

<input type="email" name="email" value={email} onChange={onChange} placeholder="correo"/>

<input type="password" name="password" value={password} onChange={onChange} placeholder="Introduce tu contraseña"/>

<input type="password" name="password2" value={password2} onChange={onChange} placeholder="Repite tu contraseña"/>

<button type="submit">Register</button>

</form>

)

}

export default Register