import {  useState } from "react";
import Cart from './Components/Cart/Cart';
import AvailableItem from "./Components/Items/AvailableItem";
import Header from "./Components/Layout/Header";
import Footer from './Components/Layout/Footer';
import classes from './App.module.css';
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hiddenCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <AvailableItem />
      </main>
      <div className={classes['footer-container']}>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
