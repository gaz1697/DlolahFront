import { Routes, Route } from "react-router-dom";

import "./globals.css";
import SigninForm from "./_ِauth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignupForm from "./_ِauth/forms/SignupForm";
import AuthLayout from "./_ِauth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";
import AboutUs from "./_root/pages/AboutUs";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
