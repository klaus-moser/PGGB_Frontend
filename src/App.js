import { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Gallery from "./pages/Gallery";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TestData from "./components/TestData";

function App() {
  const [memes, setMemes] = useState(TestData);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Gallery memes={memes} />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<SignIn />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
