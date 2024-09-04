import React from 'react'
import Templates from '../components/Templates'
import loginImg from "../assests/loginImg.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Templates
    title="Welcome Back"
    desc1="Build skills for today,tommorow and beyond"
    desc2="Education is future "
    image={loginImg}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default Login
