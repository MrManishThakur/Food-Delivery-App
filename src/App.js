import React, { useState } from 'react'
import CartProvider from './Store/CartProvider';
import Cart from './Components/Cart/Cart';
import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals';
function App() {
  const [shownCart, setShownCart] = useState(false);
  const showCartHandler = () => {
    setShownCart(true);
  }
  const hideCartHandler = () => {
    setShownCart(false);
  }
  return (
    <CartProvider>
      {shownCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
