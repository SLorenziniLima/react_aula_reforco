import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'


import {BrowserRouter, Routes, Route} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home />} />
      
    </Routes>
    
    </BrowserRouter>
   
    <Footer/>


  </React.StrictMode>,
)


