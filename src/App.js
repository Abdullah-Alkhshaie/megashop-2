import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";
import Footer from "./pages/Footer";
import ProductPage from "./pages/ProductPage";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import ScrollToTopButton from "./components/StuckButton";

function App() {
  return (
    <div className="bg-light h-full">
      <BrowserRouter>
        <Header />
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
              <Route path="Login" element={<Login />} />
              <Route path="SignIn" element={<SignIn />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="productlist" element={<ProductList />} />
              <Route path="productpage/:id" element={<ProductPage />} />
            </Routes>
            <ScrollToTopButton />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
