import React from 'react'
import './App.css'
import Home from './Home'
import Single from './Single'

import {  Routes, Route } from 'react-router-dom'
import Error from './Error'

function App() {
   

  return (
    <>
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/movie/:id' element={<Single /> } />
            <Route path='*' element={<Error />} />
          </Routes> 

       
    </>
  )
}

export default App
