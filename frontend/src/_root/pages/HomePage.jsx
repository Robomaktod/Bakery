import React from 'react'
import ProductList from '/src/components/ProductList.jsx';

import "../../css/Home.css"

const home = () => {
  return (
    <>
      <h1 className='main-text'>Flour power</h1>
      <h3 className='main-subtext'>Kneading <br /> Happiness Into <br /> Every Slice</h3>
      <ProductList />
    </>

  )
}

export default home;