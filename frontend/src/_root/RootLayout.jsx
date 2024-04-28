import React from 'react'
import Outlet from 'react-router-dom'

const rootLayout = () => {
  return (
    <div>rootLayout
     <p>hello</p>
     <section> <Outlet/></section>
     </div>
    
  )
}

export default rootLayout