import React from 'react'
import frameImage from "../assests/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


const Templates = ( {title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <spam>{desc1}</spam>
                <spam>{desc2}</spam> 
            </p>

            {formtype ==="signup"?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>SIGNIN with Google</p>
            </button>

            
        </div>

        <div>
            <img src={frameImage} alt="patern"
            width={558}
            height={490}
            loading='lazy'></img>

            <img src={image} alt="Students"
            width={558}
            height={350}
            loading='lazy'></img>
        </div>

      
    </div>
  )
}

export default Templates
