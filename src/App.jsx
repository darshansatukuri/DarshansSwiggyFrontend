import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'

import "./App.css"

import {Routes ,Route} from "react-router-dom"
import Login from './vendorDashboard/components/forms/Login'
import NotFoundPage from './vendorDashboard/components/forms/NotFoundPage'

const App = () => {
  return (
   <Routes>
    <Route  path="/" element={<LandingPage/>}/>
    <Route path="/*" element={<NotFoundPage/>}/>
   </Routes>
     
     
  )
}

export default App
