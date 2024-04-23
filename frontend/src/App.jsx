import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { index } from './Pages/Home'
import login from "./Pages/Login/login.jsx" 


function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={ <login /> } />
        <Route index element={ <home />} />
        
      </Routes>
      res
    </main>
  )
}

export default App;

