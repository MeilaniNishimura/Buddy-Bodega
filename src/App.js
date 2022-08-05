import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services';
import LostandFound from './components/pages/LostandFound';
import Adopt from './components/pages/Adopt'
import SignUp from './components/pages/Signup'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/> 
        <Route path='/services' element={<Services />}/>
        <Route path='/lostandfound' element={<LostandFound />}/>
        <Route path='/adopt' element={<Adopt />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </Router>
  </>
  );
 }

export default App;
