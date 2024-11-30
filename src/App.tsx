import Features from "./pages/Features/Features";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Resources from "./pages/Resources/Resources";
import Layout from "./pages/Layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
