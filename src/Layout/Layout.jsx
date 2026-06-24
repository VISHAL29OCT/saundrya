import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Layout({ children, cart, removeFromCart, increaseQty, decreaseQty, isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {children}
      <Footer />
    </>
  );
}