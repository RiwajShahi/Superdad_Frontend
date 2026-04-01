import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ContactForm from "./pages/Contact";
import ProductDetails from "./pages/Productdetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Layout Wrapper */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;