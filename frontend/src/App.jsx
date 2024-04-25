import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { Home } from './_root/pages'


function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={ <login /> } />
        <Route index element={ <Home /> } />
        
      </Routes>
    </main>
  )
}

export default App;

