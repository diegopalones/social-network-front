import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const {user} = useSelector(state=>state.auth)
    if(!user){
      return <h1>No hay usuario...</h1>
    }
  return (
    <div>
        <p>{user.user.username}</p>
    </div>
  )
}

export default Profile