import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/load-katalog');
      setProducts(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.product_id}>
            <h3>{product.product_name}</h3>
            <p>Price: ${product.price}</p>
            {product.image && <img src={product.image} alt={product.product_name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
