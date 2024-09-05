import React from 'react'

import frame from "../assests/frame.jpg"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import{FcGoogle} from "react-icons/fc"


const Templates = ( {title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0'>
        
        <div className=' w-11/12 max-w-[450px]' >
            <h1
            className=' w-full text-gray-400 font-semibold text-[1.87rem] leading-[2.375] '>{title}</h1>
            <p className='text-[1.15] mt-4'>
                <spam className="text-gray-600 w-full">{desc1}</spam><br/>
                <spam className="text-blue-400 italic  w-full">{desc2}</spam> 
            </p>

            {formtype ==="signup"?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className=' w-full h-[1px] bg-slate-600'></div>
                <p className='text-gray-400 text-xl font-medium'>OR</p>
                <div className=' w-full h-[1px] bg-slate-600'></div>
            </div>

            <button className='w-full flex justify-center items-center
              border border-gray-600 rounded-md font-medium text-gray-400
              py-[8px] px-[12px] gap-x-2 mt-6' onClick={() => window.open( 'http://www.google.com')}>
                <FcGoogle></FcGoogle>
                <p>Sign in with Google</p>
            </button>

            
        </div>

        <div className='relative '>
            <img src={frame} alt="patern"
            height={370}
            width={370}
            
            loading='lazy'></img>

            <img src={image} alt="Students"
            width={300}
            height={310}
            loading='lazy' className='absolute -top-6 right-5'></img>
        </div>

      
    </div>
  )
}

export default Templates
