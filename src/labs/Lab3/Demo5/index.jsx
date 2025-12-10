import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReferralProvider } from "./ReferralContext";
import Product from "./Product";
import Checkout from "./Checkout";
import Home from "./Home";

export default function Demo5() {
  return (
    <ReferralProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ReferralProvider>
  );
}
