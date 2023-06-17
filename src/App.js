
import { Fragment, useState } from "react";
import Cart from './Components/Cart/Cart'
import AvailableItem from "./Components/Items/AvailableItem";
import Header from "./Components/Layout/Header";
import Footer from './Components/Layout/Footer'
import classes from './App.module.css'

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hiddenCartHandler = () => 
  {
    setShowCart(false)
  }

  return (
    <Fragment>
      <section>
        <header>
          <h1>The Generics</h1>
        </header>
      </section>
    {showCart && <Cart onClose = {hiddenCartHandler}/>}
    <Header onShowCart={showCartHandler} />
      <main>
        <AvailableItem />
      </main>
      <section>
        <footer>
          <h1>The Generics</h1>
        </footer>
      </section>
      <div className={classes['footer-container']}>
     <Footer />
     </div>
    </Fragment>
  );
}
export default App;