import { useState, useEffect } from 'react';
import axios from "axios";
import "../css/ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/load-katalog');
            setProducts(response.data);
        };

        fetchData();
    }, []);

    const handleToggleMenu = (productId) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.product_id === productId) {
                    return { ...product, showMenu: !product.showMenu };
                }
                return product;
            });
        });
    };

    return (
        <div className="product-container">
            {products.map(product => (
                <div key={product.product_id} className="product">
                    <img src={product.image} alt={product.product_name} />
                    <div className="product-details">
                        <h3>{product.product_name}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                    <button onClick={() => handleToggleMenu(product.product_id)}>
                        More
                    </button>
                    {product.showMenu && (
                        <div className="dropdown-menu">
                            <div className="menu-close">
                                <button onClick={() => handleToggleMenu(product.product_id)}>
                                    Close
                                </button>
                            </div>
                            <div className="menu-content">
                                <div className="menu-image">
                                    <img src={product.image} alt={product.product_name} />
                                </div>
                                <div className="menu-details">
                                    <h3>{product.product_name}</h3>
                                    <p>Price: ${product.price}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
