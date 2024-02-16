import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import "@tailwindcss/forms";
import Layout from "pages/layout";
import Login from "pages/Auth/Login";
import Signup from "pages/Auth/signup";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
