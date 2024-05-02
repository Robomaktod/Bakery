import { useState, useEffect } from 'react';
import axios from "axios";
//import { useHistory } from 'react-router-dom';
import { getKatalog } from '../api/queries';
import "../css/ProductList.css";



const ProductList = () => {
  const [products, setProducts] = useState([]);
    // const history = useHistory();
    // const redirectToProductPage = (productId) => {
    //     history.push(`/product/${productId}`);
    // };


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/load-katalog');
            setProducts(response.data);
        };



    fetchData();
  }, []);


  return (
      <div className="product-container">
          {products.map(product => (
              <div key={product.product_id} className="product">
                  <img src={product.image_url} alt={product.product_name}/>
                  <h3>{product.product_name}</h3>
                  <p>Price: ${product.price}</p>
                  <button>More</button>
              </div>
          ))}
      </div>
  );
};

export default ProductList;
