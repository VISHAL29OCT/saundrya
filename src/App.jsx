import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;