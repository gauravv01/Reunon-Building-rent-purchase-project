import React from 'react';
import CartProvider from './component/store/CartContext-Provider';
import Header from './component/Layout/Header';
import Propertydetail from './component/Properties/Property';

function App() {
  return (
    <CartProvider >
      <Header/>
      <Propertydetail/>
    </CartProvider>
  );
}

export default App;
