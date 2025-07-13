import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <nav className="bg-green-600 dark:bg-green-700 sticky top-0 z-50 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          <Link to="/" className="hover:opacity-90 transition">
            BudgetEase
          </Link>
        </h1>

        <div className="space-x-4 text-sm flex items-center">
          {/* About link - visible to all */}
          <Link
            to="/about"
            className="hover:underline hover:text-white/90 transition"
          >
            About
          </Link>

          {user ? (
            <>
              <span className="hidden sm:inline text-white/80">
                Hi, {user.firstName || user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-white text-green-700 hover:bg-green-100 transition px-4 py-1.5 rounded-md font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:underline hover:text-white/90 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:underline hover:text-white/90 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
