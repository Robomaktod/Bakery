import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { Home } from './_root/pages'
import RootLayout from './_root/RootLayout'
import AuthLayout from './_auth/AuthLayout'

function App() {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={ <login /> } />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={ <Home /> } />
        </Route>

      </Routes>
      <p>hello</p>
    </main>
  )
}

export default App;

