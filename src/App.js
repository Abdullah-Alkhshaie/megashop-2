import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Account from "./pages/Account";
import Register from "./pages/Register";
import WishList from "./pages/WishList";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";
import Footer from "./pages/Footer";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="bg-light h-full">
      <BrowserRouter>
        <Navbar />
        <div className="xl:flex gap-10  my-5">
          <div className="xl:w-1/4">
            <Sidebar />
          </div>
          <div className="xl:w-3/4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="account" element={<Account />} />
              <Route path="register" element={<Register />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="productlist" element={<ProductList />} />
              <Route path="productpage/:id" element={<ProductPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
