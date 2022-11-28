import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./Cart";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
