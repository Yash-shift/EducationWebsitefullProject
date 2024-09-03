import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<Login />} />
          <Route  path="/contact" element={<Signup />} />
          <Route  path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
