import Features from "./pages/Features/Features";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Resources from "./pages/Resources/Resources";
import Layout from "./pages/Layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import ExpertInfo from "./components/ExpertInfo/ExpertInfo";

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
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/expert-info" element={<ExpertInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
