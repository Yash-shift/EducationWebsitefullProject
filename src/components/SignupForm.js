import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
  });

  const[ showPassword ,setShowPassword ]=useState(false);

  function changeHandler(event) {
    
    setFormData((prevData) => (
        {
            ...prevData,
            [event.target.name]: event.target.value
        }
    ))

  }


  return (
    <div>
      {/* student or instructor  */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <div>
        <form>
          {/* firstname last name div */}
          <label>
            <p>
              FirstNAme<sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstname}
            />
          </label>

          <label>
            <p>
              lastname<sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.lastname}
            />
          </label>

          <label>
            <p>
              Email<sup>*</sup>
            </p>
            <input
              type="emailt"
              required
              name="email"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.email}
            />
          </label>
        </form>

      </div>
        
    </div>
  );
};

export default SignupForm;
