import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from './component/Navbar';
import Home from './component/Page/Home';


function Homepage() {
  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default Homepage;
