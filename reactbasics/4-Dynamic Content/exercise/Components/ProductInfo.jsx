import React from 'react'

const ProductInfo = () => {
    const product = {
        name : "Laptop",
        price : "1200 dollars",
        availability : "In stock",
    }

  return (
    <div>
        <h1>Product</h1>
        <p>name = {product.name}</p>
        <p>price = {product.price}</p>
        <p>availability = {product.availability}</p>
    </div>
  )
};

export default ProductInfo;