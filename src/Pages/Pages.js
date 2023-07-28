import React from 'react';
import Home from '../Components/Home';
import {Route, Routes, useLocation} from 'react-router-dom';
import Login from '../Components/Login';
import Signup from '../Components/Register';

function Pages() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Signup/>} />
      </Routes>
  );
}

export default Pages