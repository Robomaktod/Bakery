import React, { useState, useEffect } from 'react';

import { getKatalog } from '../api/queries';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setProducts(getKatalog);
    };

    fetchData();
  }, []);
console.log(products)
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {/* {products.map(product => (
          <li key={product.product_id}>
            <h3>{product.product_name}</h3>
            <p>Price: ${product.price}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ProductList;
