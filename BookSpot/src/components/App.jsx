import React from "react";
import Header from "./layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Products/Products";
import Home from "./layout/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

import NotFound from "./layout/NotFound";
import Login from "../components/Auth/Login";
import Signup from "./Auth/Signup";

function App() {
  return (
    <BrowserRouter>
    <div>
    

    
      
      <Routes>
      
      <Route path="/404" element={<NotFound/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/" element={<Home />}/>
      <Route path=":category" element={<Products />}/>
      <Route path='*'  element={<Navigate replace to="/404" />}/>
       
        
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
