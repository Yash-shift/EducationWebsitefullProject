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

    function submitHandler({event , setIsloggedIn
    }){
        event.preventDefault();
        // setIsloggedIn(true);
        // Toast.success("loogged in")
        navigate('/dashboard');
    }


  return (
    <form onSubmit={submitHandler} className='flex fkex-col 
    w-full gap-y-6 mt-6'>
        <div>
        <label className='w-full'>
            <p className='text-[0.875rem] text-gray-400 mb-2'>
                Email Address <sup className='text-pink-400'>*</sup>
            </p>
            <input
            required
            type="text"
            value= {formData.email}
            onChange={changeHandler}
            placeholder='Enter Email Id'
            name="email"
            className='bg-gray-900 rounded-md text-gray-400 w-full p-[12px]'/>
            
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem]  text-gray-400 mb-2'>
                Password <sup className='text-pink-400'>*</sup>
            </p>
            <input
            required
            type={showpass?("text"):("password")}
            value = {formData.email}
            onChange={changeHandler}
            placeholder='Enter Password'
            name="password" 
            className='bg-gray-900 rounded-md text-gray-400 w-full p-[12px]'/>

            <span className=' absolute right-3 cursor-pointer top-[78px]' onClick={()=>setPass((prev) => !prev)}> 
                {showpass?(<AiOutlineEye fontSize={24} 
                fill="#AFB2FB"/>):(<AiOutlineEyeInvisible fontSize={24} 
                    fill="#AFB2FB"/>)}
            </span>
            <br/>

            <Link to="#">
                 <p className='text-xs mt-2 text-blue-400 w-full  max-w-max ml-auto'>
                    Forgot password
                 </p>
            </Link>

        </label>
        <br/>
        

        <button className=' w-full bg-yellow-500 rounded-md font-medium text-black px-[12px]
        py-[8px] mt-5'>
            Sign In
        </button>
      
    </div>
    </form>
    
  )
}

export default LoginForm
