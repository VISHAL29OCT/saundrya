import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import ProductsDetails from "./Pages/ProductsDetails";
import { useState, useEffect } from "react";
import products from "./data/productsarray";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import Paymentpage from "./Pages/Paymentpage";
import Success from "./Pages/Success";
import Collection from "./Pages/Collection";
import Stores from "./Pages/Stores";
import Profile from "./Pages/Profile";
import Order from "./Pages/Order";
import Wishlist from "./Pages/Wishlist";
import Spotting from "./Pages/Spotting";
import ScrollToTop from "./Components/ScrollToTop";
import ProtectedRoute from "./Components/ProtectedRoute";



function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )
  }, [cart])


  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      setCart(
        cart.map((item) =>

          item.id === product.id
            ? {
              ...item,
              qty: item.qty + 1
            }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        {
          ...product,
          qty: product.qty || 1
        }
      ])

    }

  }

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item))
  }

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item))
  }

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    )
  }

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  )

  return (
    <BrowserRouter>
      <Layout cart={cart} removeFromCart={removeFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty} isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products/:category" element={<Products addToCart={addToCart} />} />

          <Route path="/product/:id" element={<ProductsDetails addToCart={addToCart} cart={cart} />} />

          <Route path="/search/:query" element={<Products addToCart={addToCart} />} />

          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout cart={cart} removeFromCart={removeFromCart} />
            </ProtectedRoute>} />

          <Route path="/payment" element={<Payment cart={cart} />} />
          <Route path="/paymentpage" element={<Paymentpage cart={cart} setCart={setCart} />} />
          <Route path="/success" element={<Success />} />
          <Route path="/collection/:filter" element={<Collection addToCart={addToCart} />} />
          <Route path="/ourstores" element={<Stores />} />


          <Route path="/profile" element={
            <ProtectedRoute setIsLoggedIn={setIsLoggedIn}>
              <Profile />
            </ProtectedRoute>
          } />

          <Route path="/myorders" element={
            <ProtectedRoute setIsLoggedIn={setIsLoggedIn}>
              <Order />
            </ProtectedRoute>
          } />

          <Route path="/mywishlist" element={
            <ProtectedRoute setIsLoggedIn={setIsLoggedIn}>
              <Wishlist addToCart={addToCart} />
            </ProtectedRoute>
          } />

          <Route path="/celebrity-spotting" element={<Spotting />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;