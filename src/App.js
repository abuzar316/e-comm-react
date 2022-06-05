import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from './components/Footer';
import Product from "./product";
import ProductDetail from "./productDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
      <Footer />
    </>
  )
}