import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginForm = ( setIsloggedIn) => {


    const navigate =useNavigate();


  const [formData, setFormData]= useState({
    email:"",password:""
  })

  const[showpass,setPass]=useState(false)

  function changeHandler(event){
    setFormData((prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value

        }

    ))}

    function submitHandler(event){
        event.preventDefault();
        setIsloggedIn(true);
        // Toast.success("loogged in")
        navigate('/dashboard');
    }


  return (
    <form onSubmit={submitHandler}>
        <div>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input
            required
            type="text"
            value= {formData.email}
            onChange={changeHandler}
            placeholder='Enter Email Id'
            name="email"/>
            
        </label>

        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input
            required
            type={showpass?("text"):("password")}
            value = {formData.email}
            onChange={changeHandler}
            placeholder='Enter Email Id'
            name="password"/>

            <span onClick={()=>setPass((prev) => !prev)}> 
                {showpass?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
            </span>

            <Link to="#">
                 <p>
                    Forgot password
                 </p>
            </Link>

        </label>

        <button>
            Sign In
        </button>
      
    </div>
    </form>
    
  )
}

export default LoginForm
