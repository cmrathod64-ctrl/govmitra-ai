import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import DepartmentDetails from "./pages/DepartmentDetails";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route
          path="/departments/:name"
          element={<DepartmentDetails />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route path="/terms" element={<Terms />} />
      </Route>

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

    </Routes>
  );
}

export default App;