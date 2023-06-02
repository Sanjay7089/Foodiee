import react, { useState } from "react";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";
import Cart from "./componets/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown(true);
  };
  const cartHideHandler = () => {
    setCartIsShown(false);
  }
  return (
    <>
      {cartIsShown && <Cart onHideHandle = {cartHideHandler} />}
      <Header onShownHandle = {cartShownHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
