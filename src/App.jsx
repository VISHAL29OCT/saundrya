import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import ProductsDetails from "./Pages/ProductsDetails";
import { useState, useEffect } from "react";
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
import SavedAddresses from "./Pages/SavedAddress";




function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/cart`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "token"
              )}`,
            },
          }
        );

        const data = await res.json();

        const formattedCart = data.map(
          (item) => ({
            ...item.product,
            qty: item.qty,
          })
        );

        setCart(formattedCart);
      } catch (error) {
        console.log(error);
      }
    };

    if (localStorage.getItem("token")) {
      fetchCart();
    }
  }, []);

  const addToCart = async (
    product
  ) => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/cart`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
          body: JSON.stringify({
            productId: product._id,
            qty: product.qty || 1,
          }),
        }
      );

      // UI update ke liye
      setCart((prev) => {
        const existing =
          prev.find(
            (item) =>
              item._id ===
              product._id
          );

        if (existing) {
          return prev.map(
            (item) =>
              item._id ===
                product._id
                ? {
                  ...item,
                  qty:
                    item.qty +
                    (product.qty ||
                      1),
                }
                : item
          );
        }

        return [
          ...prev,
          {
            ...product,
            qty:
              product.qty || 1,
          },
        ];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQty = async (
    productId
  ) => {
    const item = cart.find(
      (item) =>
        item._id === productId
    );

    const newQty =
      item.qty + 1;

    await fetch(
      `${import.meta.env.VITE_API_URL}/cart/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
        },
        body: JSON.stringify({
          qty: newQty,
        }),
      }
    );

    setCart(
      cart.map((item) =>
        item._id === productId
          ? {
            ...item,
            qty: newQty,
          }
          : item
      )
    );
  };

  const decreaseQty = async (
    productId
  ) => {
    const item = cart.find(
      (item) =>
        item._id === productId
    );

    if (item.qty === 1)
      return;

    const newQty =
      item.qty - 1;

    await fetch(
      `${import.meta.env.VITE_API_URL}/cart/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
        },
        body: JSON.stringify({
          qty: newQty,
        }),
      }
    );

    setCart(
      cart.map((item) =>
        item._id === productId
          ? {
            ...item,
            qty: newQty,
          }
          : item
      )
    );
  };

  const removeFromCart = async (
    productId
  ) => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/cart/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
      );

      setCart(
        cart.filter(
          (item) =>
            item._id !== productId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"))

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
          <Route path="/savedaddress" element={
            <ProtectedRoute>
              <SavedAddresses />
            </ProtectedRoute>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;