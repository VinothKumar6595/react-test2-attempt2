import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import MedForm from "./components/MedForm";
import MedList from "./components/MedList";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <div className="App">
      <CartProvider>
        {showCart && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <MedForm />
        <MedList />
      </CartProvider>
    </div>
  );
}

export default App;
