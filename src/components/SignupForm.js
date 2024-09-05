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

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [accountType, setAccountType] = useState("student");

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      {/* student or instructor  */}
      <div
        className="flex  bg-gray-600 rounded-full max-w-max
      px-2 py-2 mt-5 mb-5 text-gray-400 font-semibold gap-2"
      >
        <button onClick={() => setAccountType("student")}
          className={`${accountType=== "student" ? "bg-slate-900 text-white px-4 py-2 rounded-full ":" bg-slate-800 text-gray-600 px-4 py-2 rounded-full transition-all duration-200 font-mono" }`}>Student</button>
        <button className={`${accountType=== "instructor" ? "bg-slate-900 text-white px-4 py-2 rounded-full ":" bg-slate-800 text-gray-600 px-4 py-2 rounded-full transition-all duration-200 font-mono"}`} onClick={() => setAccountType("instructor")}>Instructor</button>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          {/* firstname last name div */}

          <div className="flex  justify-between">
            <label className="text-[0.875rem] text-gray-400 mb-2>">
              <p>
                Firstname<sup>*</sup>
              </p>
              <input
                type="text"
                required
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter first name"
                value={formData.firstname}
                className="bg-gray-900 rounded-md text-gray-400 w-full p-[12px]"
              />
            </label>

            <label className="text-[0.875rem] text-gray-400 mb-2">
              <p>
                lastname<sup>*</sup>
              </p>
              <input
                type="text"
                required
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter Last name"
                value={formData.lastname}
                className="bg-gray-900 rounded-md text-gray-400 w-full p-[12px]"
              />
            </label>
          </div>

          <label className="text-[0.875rem] text-gray-400 mb-2">
            <p>
              Email<sup>*</sup>
            </p>
            <input
              type="email"
              required
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Id"
              value={formData.email}
              className="bg-gray-900 rounded-md text-gray-400 w-full p-[12px]"
            />
          </label>

          <label className="text-[0.875rem] text-gray-400 mb-2">
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              type="password"
              required
              name="password"
              onChange={changeHandler}
              placeholder="Strong Password"
              value={formData.password}
              className="bg-gray-900 rounded-md text-gray-400 w-full p-[12px]"
            />
          </label>

          <button
            className=" w-full bg-yellow-500 rounded-md font-medium text-black px-[12px]
         mt-5 py-[8px]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
