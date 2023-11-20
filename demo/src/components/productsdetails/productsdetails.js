import React from 'react';
import "./productsdetails.css"

function Productsdetails({ addToCart }) {
  const products = [
    { id: 1, name: 'watch', price: 570.0, image: 'product-8.jpg' },
    { id: 2, name: 'partywearwomen', price: 1000.0, image: 'partywear.jpg' },
    { id: 3, name: 'lehenga', price: 1500.0, image: 'lehenga.jpg' },
    { id: 4, name: 'Partywearmen', price: 2000.0, image: 'partywearmen.jpg' },
    { id: 5, name: 'casual', price: 550.0, image: 'casual.jpg' },
    { id: 6, name: 'shoes', price: 560.0, image: 'product-11.jpg' },
    { id: 7, name: 'cycle', price: 4000.0, image: 'cycle1.jpeg' },

  ];

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Cart</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td><img src={product.image} alt={product.name} width="100" height="100" /></td>
              <td>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productsdetails;
