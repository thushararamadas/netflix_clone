import React, { useEffect, useState } from 'react'

//Components
import Home from './Components/Screens/Home'
import Signup from './Components/Screens/Signup';
import Logout from './Components/Screens/Logout';
// import "./App.css";

//packages
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Register from './Components/Screens/Register';
import CreatePassword from './Components/Screens/CreatePassword';
import Screen from './Components/Screens/Screen';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Context=React.createContext();

function App() {
  const [data,setData]=useState("");
  useEffect(()=>{
    setData(JSON.parse( localStorage.getItem("user_data")))
  },[]);
  return (
    <> 
    <Context.Provider value={data}>
    <Router>
      <Routes>.
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='register' element={<Register/>}/>
        <Route path='createPassword'  element={<CreatePassword/>}/>
        <Route path='Screen' element={<Screen/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Routes>
    </Router>
    </Context.Provider>
    </>
     

  
  )
}

export default App