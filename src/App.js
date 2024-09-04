import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {

  const[isLoggedIn,setIsLoggedIn] =useState(false);

  return (
    <div className="">
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route>
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route  path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route  path="/dashboard" element={<Dashboard  />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
