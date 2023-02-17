import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Pages/Hero/Hero';
import Footer from '../Components/Footer';
import Error from './ErrorPage/Error';
import Doctorsignup from './Doctor Signup/DoctorSignup';
import DoctorLogin from './DoctorLogin/DoctorLogin';
import Patientlogin from './Patient Login/Patient_login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//rfce
import DoctorsPortal from './DoctorsPortal/DoctorsPortal';
import AddPatient from './AddPatient/AddPatient';
import Dates from './Dates/Dates';
import Contact from '../Components/Contact';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import FAQs from './FAQs/FAQs';
import About from './About/About';

function App() {
   return (
    <Router >
      <div className="font-nav-font bg-white" >
        <Navbar/>
          <Routes>
              
              <Route exact path="/doctors-portal" element={<DoctorsPortal/>} />
              <Route exact path="/addPatient" element={<AddPatient/>}/>
              
              
              <Route exact path="/doctorsignup" element={<Doctorsignup/>}/>
              <Route exact path="/doctorlogin" element={<DoctorLogin/>}/>
              <Route exact path="/doctors-portal/doctorlogin" element={<DoctorLogin/>}/>
              <Route exact path="/addPatient/doctorlogin" element={<DoctorLogin/>}/>
              <Route exact path="/Patientlogin" element={<Patientlogin/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/Date" element={<Dates/>}/>
              <Route exact path="/reset" element={<ForgotPassword/>}/>
              <Route exact path="/About" element={<About/>}/>
              <Route exact path="/FAQ" element={<FAQs/>}/>
              <Route exact path="/" element={<Hero/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;