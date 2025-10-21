import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/user/Landingpage";
import ListingPage from "./pages/user/listing";
import OrderPage from "./pages/user/order";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listing" element={<ListingPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}
