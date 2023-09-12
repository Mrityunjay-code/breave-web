// src/App.js (or any other main application file)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import  Home  from './Home/Home';
import Header from './Navbar/Header';// Import your Home component (example)
import  School  from './Scholor/School';
import Developer from './Develop/Developer';
import  Login  from './Login/Login';
import Register from './register/Register';

function App() {
  return (
    <Router>
      <Header /> {/* Header component is wrapped by the Router */}
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path='/school' element={<School/>}></Route>
        {/* Define other routes here */}
        <Route path='/developer' element={<Developer/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
