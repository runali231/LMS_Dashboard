import "./App.css";
import React from "react";
import "./Dashboard/Home.css";
import {Routes,Route, BrowserRouter as Router } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'datatables.net-responsive'; 
import Home from "./Dashboard/Home";
import SignUpForm from "./Components/Signup/Signup";
import LoginForm from "./Components/Login/loginForm";

const App = (props) => {
  return (
    <>
<Router>
<Routes>
<Route path="/" element={<SignUpForm/>}/> 
<Route path="/login" element={<LoginForm/>}/> 
<Route path="/*"  element={<Home/>}/>
    {/* <Layout/> */}
    </Routes>

   </Router>
    </>
  );
};

export default App;