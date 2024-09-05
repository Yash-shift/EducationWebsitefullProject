import React from 'react'
import signupImg from '../assests/signup.jpg'
import Templates from '../components/Templates'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Templates
    title="JOIN the Million Learning!"
    desc1="Build skills for today,tommorow and beyond"
    desc2="Education is future "
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default Signup
