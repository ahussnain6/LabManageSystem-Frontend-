 import React from 'react'
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Sign from './components/Sign';
import PatientEntry from './components/PatientEntry';
import Home from './components/Home';
import Adminpage from './components/Adminpage';
import Disease from './components/Disease';
import SignBase from './components/SignBase';
import Email from "./components/Email.jsx"
import ConfirmPassword from "./components/ConfirmPassword.jsx";
 const App = () => {
   return (
     <>
     <Router>
      <Navbar />
       <Routes>
       <Route path="/" element={<Home />} />       
       <Route path="/Sign" element={<SignBase/>} />
        <Route path="/patiententry" element={<PatientEntry />} />
        <Route path="/admindata" element={<Adminpage />} />
        <Route path="/Disease" element={ <Disease /> } />
        <Route path="/email" element={ <Email /> } />
        <Route path="/changepassword/:id" element={ <ConfirmPassword /> } />
       </Routes>
     
     </Router>
     </>
   )
 }
 
 export default App;