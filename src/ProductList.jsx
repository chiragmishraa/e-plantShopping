
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const products = [
  { name: 'Plant A', cost: '$10.00', image: 'plantA.jpg' },
  { name: 'Plant B', cost: '$15.00', image: 'plantB.jpg' },
];

const ProductList = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.name} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.cost}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
