// import {useState} from 'react';
import { Route, Routes } from "react-router";
import {useEffect, useState} from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Destination from './pages/Destination'
import Nav from './components/Nav/Nav';


function App() {
  const [allTripData, setallTripData] = useState([])

  useEffect(() => {
    const fetchTourData = async () => {
        const tourRes = await fetch('http://localhost:3030/tripData')
        const tourData = await tourRes.json();
        setallTripData(tourData);
    }
    fetchTourData()
}, [])
  
  return (
    <>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/destination' element={<Destination allTripData={allTripData}/>}/>
    </Routes>
    </>
  );
}

export default App;
