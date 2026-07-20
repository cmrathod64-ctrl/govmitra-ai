import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import DepartmentDetails from "./pages/DepartmentDetails";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/departments/:name" element={<DepartmentDetails />} />
      <Route path="/search" element={<Search />} />
      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;