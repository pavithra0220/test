import React, { useState } from 'react';
import "./cart.css"

function Cart({ cart }) {
  const [cartItems, setCartItems] = useState(cart);

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const incrementQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
  };

  const decrementQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <table className='tables'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Cart</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <img src={item.image} alt={item.name} width="50" height="50" />
              </td>
              <td>
                <button onClick={() => decrementQuantity(item)}> - </button>
                {item.quantity}
                <button onClick={() => incrementQuantity(item)}> + </button>
              </td>
              <td>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total Price:</td>
            <td>${totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
