import React, { useState, useEffect } from "react";
const Cards = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() =>
 {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const addCard = () => {
      if (visibleProducts.length < products.length) {
        setVisibleProducts([...visibleProducts, products[visibleProducts.length]]);
    }; 
    }


  const removeCard = () => {
    if (visibleProducts.length > 0) {
      setVisibleProducts(visibleProducts.slice(0, -1)); 
    }

  };

  return (
    <div>
      <button onClick={addCard}>Add Card</button>
      <button onClick={removeCard}>Remove Card</button> 
      <div className="card-container">
        {visibleProducts.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;