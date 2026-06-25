import { Route, Routes } from "react-router-dom";
import "@fontsource/playfair-display/700.css";
import "./App.css"

import User from "./pages/AboutUsPage.page";
import BuyPage from "./pages/BuyPage.page";
import Adim from "./pages/AdimPage.page";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/admin" element={<Adim />} />
      </Routes>
    </div>
  );
}