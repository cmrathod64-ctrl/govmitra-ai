import { Link, useLocation } from "react-router-dom";
import { Home, Building2, Search, Info } from "lucide-react";

function BottomNav() {
  const { pathname } = useLocation();

  if (
    pathname === "/admin" ||
    pathname === "/admin-login"
  ) {
    return null;
  }

  const active = "text-green-700";
  const normal = "text-gray-500";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-50">

      <div className="flex justify-around py-2">

        <Link
          to="/"
          className={`flex flex-col items-center ${
            pathname === "/" ? active : normal
          }`}
        >
          <Home size={22} />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          to="/departments"
          className={`flex flex-col items-center ${
            pathname === "/departments"
              ? active
              : normal
          }`}
        >
          <Building2 size={22} />
          <span className="text-xs">Dept</span>
        </Link>

        <Link
          to="/search"
          className={`flex flex-col items-center ${
            pathname === "/search"
              ? active
              : normal
          }`}
        >
          <Search size={22} />
          <span className="text-xs">Search</span>
        </Link>

        <Link
          to="/about"
          className={`flex flex-col items-center ${
            pathname === "/about"
              ? active
              : normal
          }`}
        >
          <Info size={22} />
          <span className="text-xs">About</span>
        </Link>

      </div>
    </div>
  );
}

export default BottomNav;