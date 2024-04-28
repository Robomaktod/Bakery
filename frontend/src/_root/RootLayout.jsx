import React from 'react'
import {Outlet} from 'react-router-dom'

const rootLayout = () => {
  return (
  <>     
    <section> <Outlet/> </section>
  </>

    
  )
}

export default rootLayout