import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import {Home} from './Pages/Home/Home'
import {Analytics} from './Pages/Analytics/Analytics'
import {Inforesources} from './Pages/Inforesources/Inforesources'
import {Quiz} from './Pages/Quiz/Quiz'
import {Contact} from './Pages/Contact/Contact'
import {Donate} from './Pages/Donate/Donate'
import {Register} from './Pages/Register/Register'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      {/* call files */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/info-resources' element={<Inforesources/>}/>
        <Route path='/quizes' element={<Quiz/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/donate-now' element={<Donate/>}/>
        <Route path='/register-now' element={<Register/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
