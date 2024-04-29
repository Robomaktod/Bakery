import React from 'react'
import {Outlet} from 'react-router-dom'
import Topbar from '../components/Topbar'

const rootLayout = () => {
  return (
  <>     
    <Topbar />
    <section> <Outlet/> </section>
  </>

    
  )
}

export default rootLayout