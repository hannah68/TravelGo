import React from 'react';
import { Route, Routes } from "react-router";

import Home from './pages/Home'
import Signin from './pages/Signin'
import Destination from './pages/Destination'
import Nav from './components/Nav/Nav';


function App() {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/destination' element={<Destination/>}/>
    </Routes>
    </>
  );
}

export default App;
