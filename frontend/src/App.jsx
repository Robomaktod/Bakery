import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { Home, Menu, About } from './_root/pages'
import RootLayout from './_root/RootLayout'

import AuthLayout from './_auth/AuthLayout'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'

import "./globals.css"

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>s

        <Route element={<RootLayout />}>
          <Route index element={ <Home /> } />
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Route> 

      </Routes>

    </main>
  )
}

export default App;

